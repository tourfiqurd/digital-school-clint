import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



const MakeAdmin = () => {
    return (
        <div>

            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img width="100%" src="https://img.freepik.com/free-vector/dashboard-concept-illustration_114360-4351.jpg?w=740" alt="" />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h1>Make Admin</h1>
                        <TextField fullWidth id="standard-basic" label="Enter  Email Here" size='50' variant="standard" /><br /><br />
                        <TextField fullWidth id="standard-basic" label="Confirm Your Email Here" size='50' variant="standard" /><br /><br />


                        <Button variant="contained" >Make Admin </Button>


                    </Grid>

                </Grid>
            </Box>

        </div>
    );
};

export default MakeAdmin;