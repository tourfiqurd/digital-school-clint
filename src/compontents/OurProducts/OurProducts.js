import React from 'react'
import "./OurProducts.css"
import SingleProducts from './SingleProducts';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const products = [
    {
        heading: "Mangoes For Juice",
        id: "0",
        price: "$10",
        img: "https://html.design/demo/sunshine/images/pro1.png",
        desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non"

    },

    {
        heading: "Apple For Juice",
        id: "1",
        price: "$10",
        img: "https://html.design/demo/sunshine/images/pro2.png",
        desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non"

    },
    {
        heading: "Orange For Juice",
        id: "2",
        price: "$10",
        img: "https://html.design/demo/sunshine/images/pro3.png",
        desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non"

    },
    {
        heading: "Pineapple For Juice",
        id: "3",
        price: "$10",
        img: "https://html.design/demo/sunshine/images/pro4.png",
        desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non"

    },


]

const OurProducts = () => {
    return (
        <div>
            <div className='main-div'>
                <h1 className='main-heading'>OUR PRODUCTS</h1>
                <hr className='horijental' />
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br /> nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam <br /> erat, sed diam voluptu</p>

            </div>
            <div className='ourProducts-div'>
                <Grid container spacing={2}>
                    {
                        products.map(product => <SingleProducts data={product}></SingleProducts>)
                    }



                </Grid>


            </div>
        </div>
    );
};

export default OurProducts;