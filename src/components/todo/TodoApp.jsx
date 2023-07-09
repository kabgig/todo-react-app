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
    
    function handleUserNameChange(event){
        setUsername(event.target.value);
    }
    
    function handlePasswordChange(event){
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    return(
        <div className="Login">
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
                    <button type="button" name="login">Login</button>
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