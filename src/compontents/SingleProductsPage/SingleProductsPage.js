import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { useParams } from 'react-router-dom';
import SingleProducts from './../OurProducts/SingleProducts';
import useAuth from './../../hooks/useAuth';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

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


function ResponsiveDrawer(props) {
    const { user, singOutUsers } = useAuth()
    const [cartProdcuts, setCartPrducts] = useState("")
    // cartProdcuts.map(ded => console.log(ded))
    const drawer = (
        <div>
            <Toolbar />

            <h1>MY CART</h1>
            <Divider />
            {
                products?.map(dfe => <li>{dfe.heading}</li>)
            }


        </div>
    );







    const { id } = useParams()
    const theproduct = products[id]
    const otherProducts = products.filter(product => product.id != id)
    console.log(theproduct);
    const { img, heading, desc, price } = theproduct
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    console.log(cartProdcuts);



    const handProductAddCart = () => {


        setCartPrducts([...cartProdcuts, theproduct])
    }


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };



    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Toolbar sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Sunshine
                        </Typography>
                        <Link to="/">
                            <Button variant="contained" color="success">Home</Button>
                        </Link>
                        <Link to="/products">

                            <Button variant="contained" color="success">PRoducts</Button>
                        </Link>
                        {
                            user.email ? <Button onClick={singOutUsers} variant="contained" color="success">LOgout</Button> : <Link to="/login"> <Button onClick={singOutUsers} variant="contained" color="success">LoGin</Button>    </Link>
                        }


                    </Toolbar>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <img width="100%" src={img} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <h1>{heading}</h1>
                        <p>{price}</p>
                        <p>{desc}</p>

                        <Button onClick={handProductAddCart} variant="contained">Add to cart</Button>

                    </Grid>

                </Grid>

                <h1>OUR OTHER PRODUCTS</h1>

                <Grid container spacing={2}>


                    {
                        otherProducts.map(product => <SingleProducts data={product}></SingleProducts>)
                    }



                </Grid>


            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;