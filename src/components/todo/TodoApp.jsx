import './TodoApp.css'
import { useState } from 'react'

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <LoginComponent/>
            {/* <WelcomeComponent/> */}
        </div>
    )
}

function LoginComponent(){

    const [username,setUsername] = useState('in28minutes')
    const [password,setPassword] = useState('')
    const [showSuccessMessage,setShowSuccessMessage] = useState(false)
    const [showErrorMessage,setShowErrorMessage] = useState(false)
    
    function handleUserNameChange(event){
        setUsername(event.target.value);
    }
    
    function handlePasswordChange(event){
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    function handleSubmit(){
        if(username==='ansar' && password==='12345678'){
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            console.log('success')
        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
            console.log('Failed')
        }
    }

    return(
        <div className="Login">
            <div className="successMessage">Authenticated Successfully</div>
            <div className="errorMessage">Authentication Failed. Please check your credentials.</div>
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUserNameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent(){
    return(
        <div className="Welcome">
            Welcome Component
        </div>
    )
}