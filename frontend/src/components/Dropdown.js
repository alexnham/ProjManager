import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

const Dropdown = () => {
    const {logout} = useLogout()
    const { user } = useAuthContext();
    
    const handleLogout = () => {
        logout()
    }
    return (
        <div className='profile-dropdown' id='dropdown'>
            
            {!user && (
                <div className='logged-out'>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign up</Link>
            </div>
            )}

            {user && (
                <div className='logged-in'>
                <label>{user.username}</label>
                <button style={{cursor:'pointer'}}onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
       
    )

}
export default Dropdown