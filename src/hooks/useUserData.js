import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useUserData = () => {
    const { user } = useAuth()
    const [userData, setUserData] = useState("")


    useEffect(() => {
        fetch(`https://fathomless-anchorage-10152.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))

    }, [])


    return { userData }
};

export default useUserData;