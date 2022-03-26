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
const AddLessons = () => {
    const [ok, setOk] = useState()
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                    <img width="100%" src="https://img.freepik.com/free-vector/dashboard-concept-illustration_114360-4351.jpg?t=st=1647969648~exp=1647970248~hmac=4fa7d2328e596540b416296f7000b29362fc8f331fcb5bc281e57d97fcc4c279&w=740" alt="" />

                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='h3'>Admin Registration</Typography><br />



                    <TextField fullWidth id="standard-basic" label="Email ID" size='50' variant="outlined" /><br /><br />



                    {
                        ok && <Alert severity="success"> Student Added SuccessFully</Alert>
                    }
                    <Button variant="contained">Make admin</Button>


                </Grid>

            </Grid>

        </div>
    );
};

export default AddLessons;