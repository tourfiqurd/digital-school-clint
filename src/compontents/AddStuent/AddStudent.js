import React, { useState } from 'react';
import { FormControlLabel, Radio, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

import RadioGroup from '@mui/material/RadioGroup';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

const AddStudent = () => {
    const [StudentName, setStudentName] = useState("")
    const [RedingClass, setRedingClass] = useState("")
    const [EmailId, setEmailId] = useState("")
    const [MobileNumber, setMobileNumber] = useState("")
    const [ok, setOk] = useState(false)
    const handleNameOnBlur = e => {
        setStudentName(e.target.value)
    }
    const handleRedingClassOnBlur = e => {
        setRedingClass(e.target.value)
    }
    const handleEmailIdOnBlur = e => {
        setEmailId(e.target.value)
    }
    const handleMobileNumberOnBlur = e => {
        setMobileNumber(e.target.value)
    }

    const handleStudenResistraton = (event) => {
        const ResisterdStudent = {
            name: StudentName,
            role: "Student",
            email: EmailId,
            mobileNumber: MobileNumber,
            class: RedingClass
        }
        fetch("https://fathomless-anchorage-10152.herokuapp.com/users", {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            }, body: JSON.stringify(ResisterdStudent)
        }).then(res => {
            if (res.ok) {
                setOk(true)
            }
        })

    };
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>

                <img width="100%" src="https://img.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg?t=st=1647509391~exp=1647509991~hmac=bf105e1b07d16d0d18021235050fed8c40cbc9a9bf9c1ad99044da03ab0ce564&w=826" alt="" />

            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant='h3'>Students Registration</Typography><br />
                <Typography variant='p'>From</Typography><br />

                <TextField onBlur={handleNameOnBlur} fullWidth id="standard-basic" label="Name Here" size='50' variant="outlined" /><br /><br />
                <TextField type="number" onBlur={handleRedingClassOnBlur} fullWidth id="standard-basic" label="Class Here" size='50' variant="outlined" /><br /><br />

                <TextField onBlur={handleEmailIdOnBlur} fullWidth id="standard-basic" label="Email ID" size='50' variant="outlined" /><br /><br />
                <TextField onBlur={handleMobileNumberOnBlur} fullWidth id="standard-basic" label="Mobile Number" size='50' variant="outlined" /><br /><br />


                {
                    ok && <Alert severity="success"> Student Added SuccessFully</Alert>
                }
                <Button onClick={handleStudenResistraton} variant="contained">Submit</Button>


            </Grid>

        </Grid>
    );
};

export default AddStudent;