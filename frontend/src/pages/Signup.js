import { useSignup } from "../hooks/useSignup"
import { useState } from "react"


const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {signup,isLoading,error,signUpSuccess} = useSignup()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(username,password)
    }

    return (
        <form onSubmit={handleSubmit} className="signup">
        <h3>Signup</h3>

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
        {!isLoading && <button >Sign Up</button>}
        {isLoading && <div>Loading (API may be initalizaing, please be patient)... </div>}
        {error && <div className="error">{error}</div>}
        {console.log({signUpSuccess})}
        {signUpSuccess && <div className="signUpSuccess">Signed Up Successfully!</div>}
        </form>

    )


}

export default Signup