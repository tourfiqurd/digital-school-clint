import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"

const SingleProducts = (props) => {
    const { price, heading, img, desc, id } = props.data
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ margin: "20px" }} >
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desc}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                        Price: {price}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                    <Link to={`/products/${id}`}>
                        <Button variant='contained'>View Now</Button>

                    </Link>



                </CardActions>
            </Box>



        </Grid>

    );
};

export default SingleProducts;