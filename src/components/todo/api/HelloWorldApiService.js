import axios from 'axios'

// export function retrieveHelloWorldBean(){
//    return axios.get('http://localhost:8080/hello-world/path-variable/ansar')
// }

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

export const retrieveHelloWorldBean
    = () => apiClient.get('/hello-world-bean')
    
export const retrieveHelloWorldPathVariable
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`, {
        headers: {
            Authorization: 'Basic aW4yOG1pbnV0ZXM6MTIzNDU2Nzg='
        }  
    })

export const executeBasicAuthenticationService
    = (token) => apiClient.get(`/basicauth`, {
        headers: {
            Authorization: token
        }
    })