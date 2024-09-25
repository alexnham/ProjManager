import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate } from 'react-router-dom';

export const Reroute = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();

    useEffect ( () => {
        if(!user) {
            navigate('/login')
        }
    }
    ,[])
}