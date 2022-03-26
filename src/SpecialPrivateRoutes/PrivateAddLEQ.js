import React from 'react';
import useUserData from '../hooks/useUserData';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateAddLEQ = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    let location = useLocation()

    const { userData } = useUserData()
    const datda = false
    if (userData.role == "Admin" || userData.role == "Teacher") {
        return children


    }
    else {
        return <h1>Your Can`t See this Page</h1>
    }



};

export default PrivateAddLEQ;