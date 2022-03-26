import React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate, useLocation } from "react-router-dom"

import useAuth from './../../hooks/useAuth';

import { useState } from 'react';

const AddressForm = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || "/";



    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")
    const { signInUsers, googleSignIn } = useAuth()
    const handleLoginFormSubmit = () => {
        signInUsers(email, passWord)
        navigate(from, { replace: true });

    }


    const handleEmailBLur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBLur = (e) => {
        setPassWord(e.target.value);
    }
    return (
        <div className='main-container'>
            <div>
                <img width="100%" src="https://img.freepik.com/free-vector/address-concept-illustration_114360-321.jpg?w=740" alt="" />
            </div>
            <div>

                <h1> Permanent Address</h1>
                <div className='main-login'>
                    <TextField onBlur={handleEmailBLur} fullWidth id="standard-basic" label="Enter Your Email Here" size='50' variant="standard" /><br /><br />
                    <TextField onBlur={handleEmailBLur} fullWidth id="standard-basic" label="Enter Your Email Here" size='50' variant="standard" /><br /><br />
                    <TextField onBlur={handleEmailBLur} fullWidth id="standard-basic" label="Enter Your Email Here" size='50' variant="standard" /><br /><br />
                    <TextField onBlur={handlePasswordBLur} fullWidth id="standard-basic" label="Enter Your Password Here" size='50' variant="standard" /><br /><br />


                    <Button variant="contained" onClick={handleLoginFormSubmit}>Order </Button>

                </div>
            </div>

        </div>
    );
};

export default AddressForm;