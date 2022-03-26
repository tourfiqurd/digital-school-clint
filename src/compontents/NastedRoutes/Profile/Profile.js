import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Profile = () => {
    return (

        <div>
            <div>
                <h1>My Profile</h1>
                <hr />

            </div>
            <div>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <img width="50%" src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?t=st=1647498626~exp=1647499226~hmac=a2e4599bf11fa00e4e9c024a8c7eb4d59574cf7270e83e9d24505c2cbf6b5bdc&w=740" alt="" />
                        <br /><Button variant="outlined">Edit</Button>

                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth
                            disabled
                            id="outlined-disabled"
                            label="Student ID:"
                            defaultValue="113164dfds8521fds8fsdf"
                        />
                        <br />
                        <br />

                        <TextField fullWidth
                            disabled
                            id="outlined-disabled"
                            label="Student ID:"
                            defaultValue="113164dfds8521fds8fsdf"
                        />
                        <br />
                        <br />
                        <TextField fullWidth
                            disabled
                            id="outlined-disabled"
                            label="Student ID:"
                            defaultValue="113164dfds8521fds8fsdf"
                        />
                        <br />
                        <br />
                        <TextField fullWidth
                            disabled
                            id="outlined-disabled"
                            label="Student ID:"
                            defaultValue="113164dfds8521fds8fsdf"
                        />
                        <br />
                        <br />
                        <TextField fullWidth
                            disabled
                            id="outlined-disabled"
                            label="Student ID:"
                            defaultValue="113164dfds8521fds8fsdf"
                        />
                        <br />
                        <br />
                        <Button variant="contained">Save Change</Button>

                    </Grid>

                </Grid>
            </div>



        </div>

    );
};

export default Profile;
