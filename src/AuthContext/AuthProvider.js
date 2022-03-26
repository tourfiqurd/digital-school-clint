import React, { createContext } from 'react';
import useFirebage from './../hooks/useFirebage';



export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const AllContext = useFirebage()
    return (
        <AuthContext.Provider value={AllContext}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;