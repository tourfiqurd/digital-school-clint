import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
const PrivateRoute = ({ children, ...rest }) => {
    let location = useLocation();


    const { user, isLoading } = useAuth()
    console.log(isLoading);
    if (isLoading) {
        return <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    } else if (!user.email) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;




};

export default PrivateRoute;