import {Link} from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate } from 'react-router-dom'
const { useState, useEffect } = require("react")



const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login, isLoading, error, loginSuccess } = useLogin();
    const { user } = useAuthContext();
    const navigate = useNavigate();
    
     
    useEffect( () => {
        if(user) {
        navigate('/')
        }
    }

    ,[])
    const handleSubmit = async (e) => {
        e.preventDefault()
        login(username,password)

    }

    return (
   
        <form onSubmit={handleSubmit} className="login">
        <h3>Login</h3>

        <label>Username:</label>
        <input
            type="username"
            onChange={ (e) => setUsername(e.target.value)}
        />
         <label>Password:</label>
        <input
            type="password"
            onChange={ (e) => setPassword(e.target.value)}
        />
        {!isLoading && <button>Login</button>}
        {isLoading && <div>Loading (API Initalizing, Please Be Patient)...</div>}

        {error && <div className="error">{error}</div>}
        {loginSuccess && <div className="loginSuccess">Logged In Successfully!</div>}
        
        <label>Not A User? <Link style={{color:'blue',textDecoration:'underline'}}to='/signup'>Sign Up!</Link></label>
        </form>
    )


}

export default Login