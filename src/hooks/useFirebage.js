import React, { useEffect, useState } from 'react';
import initialigeAuthentication from './../compontents/firebage/firebage.init';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";

const useFirebage = () => {
    initialigeAuthentication()

    const [user, setUser] = useState("")
    const [isLoading, setIsloading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    const googleSignIn = () => {
        setIsloading(true)

        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                console.log(user);
                setUser(user)

            }).finally(() => {
                setIsloading(false)

            })
    }
    const createNewUser = (email, password) => {
        setIsloading(true)

        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {

                const user = userCredential.user;
                setUser(user)

            }).finally(() => {
                console.log(user);
                setIsloading(false)
            })

    }
    const signInUsers = (email, password) => {
        setIsloading(true)
        console.log("email");
        signInWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {

                // Signed in 
                const user = userCredential.user;
                setUser(user)
                console.log(user);
            })
            .finally((error) => {


                setIsloading(false)

                console.log(" lockidfjdklsfdsf");
            });
    }
    const singOutUsers = () => {
        setIsloading(true)

        signOut(auth)
            .then(() => {
                setUser({})
            }).finally((error) => {
                setIsloading(false)

            });


    }
    useEffect(() => {
        setIsloading(true)


        onAuthStateChanged(auth, (user) => {
            if (user) {


                setUser(user)
                setIsloading(false)
            } else {
                setUser({})
                setIsloading(false)
            }
        });

    }, [])
    return {
        isLoading,
        user,
        googleSignIn,
        createNewUser,
        signInUsers,
        singOutUsers

    }

};



export default useFirebage;