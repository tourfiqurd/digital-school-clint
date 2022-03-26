import React from 'react';
import "./Products.css"
import Grid from '@mui/material/Grid';
import SingleProducts from './../compontents/OurProducts/SingleProducts';
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

const Products = () => {
    return (
        <div className='main-div'>
            <h3 className='main-heading'>OUR PRODUCTS</h3>
            <div>
                <Grid container spacing={2}>
                    {
                        products.map(product => <SingleProducts data={product}></SingleProducts>)
                    }



                </Grid>
            </div>


        </div>
    );
};

export default Products;