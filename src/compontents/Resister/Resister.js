import React from 'react';
import "./resister.css"
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from './../../hooks/useAuth';
import { useState } from 'react';
import { Password } from '@mui/icons-material';

const Resister = () => {
    const { createNewUser } = useAuth()
    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")
    console.log(email, passWord);

    const handleEmailBLur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBLur = (e) => {
        setPassWord(e.target.value);
    }
    return (
        <div className='main-container'>
            <div>
                <img width="100%" src="https://image.freepik.com/free-vector/online-registration-sign-up-concept-with-man-character_268404-98.jpg?w=740" alt="" />
            </div>
            <div>

                <h1>Please Resister</h1>
                <div className='main-login'>
                    <div></div>

                    <TextField onBlur={handleEmailBLur} fullWidth id="standard-basic" label="Enter Your Email Here" size='50' variant="standard" /><br /><br />
                    <TextField onBlur={handlePasswordBLur} fullWidth id="standard-basic" label="Enter Your Email Here" size='50' variant="standard" /><br /><br />
                    <Typography variant="p" component="div" gutterBottom>
                        If  Resistered Plese Login Here
                    </Typography>
                    <Button onClick={() => createNewUser(email, passWord)} type='submit' variant="contained">Resister</Button>

                </div>
            </div>

        </div>
    );
};

export default Resister;