import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';

const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;