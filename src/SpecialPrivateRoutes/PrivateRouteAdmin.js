import React from 'react';
import useAuth from '../hooks/useAuth';
import { useLocation, Navigate } from 'react-router-dom';
import useUserData from '../hooks/useUserData';

const PrivateRouteAdmin = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    let location = useLocation()

    const { userData } = useUserData()

    if (userData.role == "Admin") {
        return children


    }
    else {
        return <h1>Your Can`t See this Page</h1>
    }

};

export default PrivateRouteAdmin;