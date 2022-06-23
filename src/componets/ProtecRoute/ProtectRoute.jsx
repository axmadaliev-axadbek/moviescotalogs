import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Protectroute = ({children, ...props}) => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/auth/login',{
                replace: false,
                state: {
                    returnUrl: location
                }
            })
        }
        console.log('location');
        console.log(location);
    }, [location, navigate])

    return (
        <div>
            {children}
        </div>
    );
}

export default Protectroute;
