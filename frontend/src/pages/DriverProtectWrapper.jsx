import React, { useEffect, useState } from 'react'
import  Cookies  from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const DriverProtectWrapper = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const token = Cookies.get('token');
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!token){
            navigate("/driver-login")
        }
        setIsLoading(false);
    },[token])
    if(isLoading){
        return <div>Loading...</div>
    }
  return (
    <>{children}</>
  )
}

export default DriverProtectWrapper