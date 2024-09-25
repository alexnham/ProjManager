import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error,setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [signUpSuccess, setSignUpSuccess] = useState(false)

    const { dispatch } = useAuthContext()

    const signup = async(username, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`https://projmanage-e5a738ca3050.herokuapp.com/api/users/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username,password})
        })
        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setSignUpSuccess(false)
            setError(json.error)
        } else {
            //save the user to local storage
            localStorage.setItem('user',JSON.stringify(json))

            //update auth context
            dispatch({type: 'LOGIN', payload: json})
            setSignUpSuccess(true)
            setIsLoading(false)

        }
    }
    return {signup, isLoading, error, signUpSuccess}
}