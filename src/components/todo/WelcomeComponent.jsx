import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'

function WelcomeComponent() {
    const { username } = useParams()
    const [message, setMessage] = useState(null)
    const authContext = useAuth()

    function callHelloWorldRestApi() {
        console.log('called')

        retrieveHelloWorldPathVariable('in28minutes', authContext.token)
            .then((responce) => successfullResponce(responce))
            .catch((error) => errorResponce(error))
            .finally(() => console.log('cleanup'))

    }

    function successfullResponce(responce) {
        console.log(responce)
        setMessage(responce.data.message)
    }
    function errorResponce(error) {
        console.log(error)
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos <Link to='/todos'>here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call Hello-world
                </button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent