import { createContext, useState, useContext } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";



export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)
    const valueToBeShared = { isAuthenticated, login, logout, username,token }

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

    async function login(username, password) {

        const baToken = 'Basic ' + window.btoa(username + ":" + password)

        try {
            const responce = await executeBasicAuthenticationService(baToken)


            if (responce.status == 200) {
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)
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

    return (
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>
    )
}