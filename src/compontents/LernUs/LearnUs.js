import React from 'react';
import "./LearnUs.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const LearnUs = () => {
    return (
        <Grid container spacing={2} sx={{ padding: "20px" }}>
            <Grid item xs={12} md={6} lg={6}>
                <Box className='cotained-box' >
                    <h1 className='main-heading'>Learn More About Us</h1>
                    <hr className='horijental' />

                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise</p>
                    <hr />
                    <Button variant="contained" size="small">BUY NOW</Button>
                </Box>

            </Grid>
            <Grid item xs={12} md={6} lg={6} sx={{ textAlign: "center" }}>
                <Box  >
                    <img width="60%" src="https://html.design/demo/sunshine/images/frout.png" alt="" />
                </Box>

            </Grid>




        </Grid>

    );
};

export default LearnUs;