import { useState } from 'react'
import { useAuth } from './security/AuthContext'
import { useNavigate } from "react-router-dom"
import { createNewUserApi } from './api/TodoApiService'

function CreateUserComponent() {
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
        const user = {
            username: username,
            password: password
        }
       // console.log(user)
        try {
            await createNewUserApi(user);
            if (await authContext.login(user.username, user.password)) {
                navigate(`/welcome/${username}`);
            } else {
                setShowErrorMessage(true);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="Login">
            <h1>Create new user</h1>
            {/* {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>} */}
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
                    <button type="button" name="login" onClick={handleSubmit}>Create</button>
                </div>
                <div>
                    if you already have an account <a href="/login">Login</a>
                </div>
            </div>
        </div>
    )
}

export default CreateUserComponent