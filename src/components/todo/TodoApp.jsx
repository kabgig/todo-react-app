import './TodoApp.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome' element={<WelcomeComponent />}></Route>
                    <Route path='*' element={<ErrorComponent />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('ansar')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate()

    function handleUserNameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if (username === 'ansar' && password === '12345678') {
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            console.log('success')
            navigate('/welcome')
        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
            console.log('Failed')
        }
    }

    return (
        <div className="Login">
            <h1>Time to login!</h1>
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
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
            </div>
        </div>
    )
}


function WelcomeComponent() {
    return (
        <div className="WelcomeComponent">
            <h1>Welcome in28minutes</h1>
            <div>Welcome Component</div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard</h1>
            <div>
                Apologies for the 404. Reach out to our team at ABC.
            </div>
        </div>
    )
}