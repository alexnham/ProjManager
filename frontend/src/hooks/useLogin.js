import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";


export const useLogin = () => {
    const [error,setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [loginSuccess, setLoginSuccess] = useState(false)
    const navigate = useNavigate()

    const { dispatch } = useAuthContext()


    const login = async (username, password) => {
   
        setIsLoading(true)
        setError(null)
        const response = await fetch(`https://projmanage-e5a738ca3050.herokuapp.com/api/users/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username,password})
        })
        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setLoginSuccess(false)
            setError(json.error)
        } else {
            //save the user to local storage
            localStorage.setItem('user',JSON.stringify(json))

            //update auth context
            dispatch({type: 'LOGIN', payload: json})
            setLoginSuccess(true)
            setError(false)
            setIsLoading(false)
            setTimeout( () => 
                {navigate('/')
                },
                "1000")
        }
    }
return {login, isLoading, error, loginSuccess}

}