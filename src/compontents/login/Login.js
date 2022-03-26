import React from 'react';
import "./login.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { Link, useNavigate, useLocation } from "react-router-dom"

import useAuth from './../../hooks/useAuth';

import { useState } from 'react';
import Grid from '@mui/material/Grid';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || "/";



    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")


    const { signInUsers, googleSignIn } = useAuth()
    const { loginSuccess, setLoginSuccess } = useState(false)
    const handleLoginFormSubmit = () => {
        alert("fdsfdsfdsf")
        signInUsers(email, passWord)
        navigate(from, { replace: true });
        setLoginSuccess(false)
        console.log(email, passWord)

    }


    const handleEmailBLur = (e) => {
        setEmail(e.target.value);
        console.log(e.target.vlaue)
    }
    const handlePasswordBLur = (e) => {
        setPassWord(e.target.value);
        console.log(e.target.vlaue)
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>

                <img width="80%" src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg?t=st=1648269863~exp=1648270463~hmac=1ec2fcbe32210a373398f720a66555640ab96576c107217d0271658451eb3240&w=740" alt="" />

            </Grid>
            <Grid item xs={12} md={6}>
                <br /><br />
                <Typography variant='h1'>Digital School</Typography>
                <Typography variant='h6'>Login Here</Typography><br />









                <Link to="/dashboard">
                    <Button onClick={googleSignIn} variant="contained">Login  with google</Button></Link>


            </Grid>

        </Grid>
    );
};

export default Login;