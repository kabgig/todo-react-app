import { createContext, useContext, useState } from "react";

import { apiClient } from "../api/ApiClient";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";



export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)


    // function login(username,password){
    //     if (username === 'in28minutes' && password === '12345678') {
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     } else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    // async function login(username, password) {

    //     const baToken = 'Basic ' + window.btoa(username + ":" + password)

    //     try {
    //         const responce = await executeBasicAuthenticationService(baToken)

    //         if (responce.status == 200) {
    //             setAuthenticated(true)
    //             setUsername(username)
    //             setToken(baToken)

    //             apiClient.interceptors.request.use(
    //                 (config) => {
    //                     console.log('intercepting and adding token')
    //                     config.headers.Authorization = baToken
    //                     return config 
    //                 }
    //             )
    //             return true
    //         } else {
    //             logout()
    //             return false
    //         }
    //     } catch (error) {
    //         logout()
    //         return false
    //     }
    // }

    async function login(username, password) {

        try {
            const responce = await executeJwtAuthenticationService(username, password)
            const jwtToken = 'Bearer ' + responce.data.token

            if (responce.status == 200) {
                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding token')
                        config.headers.Authorization = jwtToken
                        return config 
                    }
                )
                return true
            } else {
                logout()
                return false
            }
        } catch (error) {
            logout()
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }

    const valueToBeShared = { isAuthenticated, login, logout, username, token }

    return (
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>
    )
}