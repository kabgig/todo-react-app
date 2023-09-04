import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from './security/AuthContext'


function LoginComponent() {

    //hooks
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate()
    const authContext = useAuth()

    function handleUserNameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit() {
        if (await authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
        }
    }

    const handleCreateUserClick = () => {
        // Use the navigate function to navigate to the "/createuser" route
        navigate('/createuser');
      };

    return (
        <div className="Login">
            <h1>Time to login!</h1>
            {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUserNameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
                <div>
                    or <span
                        style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
                        onClick={handleCreateUserClick}
                    >Create new account</span>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent