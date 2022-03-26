import React from 'react';
import headphone from "../../../banner-images/headphone.png"
import tv from "../../../banner-images/tv.png"
import xbox from "../../../banner-images/xbox.png"
import "./header.css"
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <div style={{
            backgroundImage: `url("https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg?t=st=1647501211~exp=1647501811~hmac=2f0f873f2e5370331a85942228ccf6a509aa5ef2aa8504a3f5131a7527c81e09&w=740")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "500px",
            padding: "30px",
            paddingLeft: "100px",
            display: "flex",
            justifyContent: "left",
            alignItems: "center"
        }}>
            <div>
                <p>Now started</p>
                <h1>Digital School</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis sunt quidem dolorum sit voluptatibus repellendus explicabo, possimus similique, aspernatur, corrupti atque recusandae earum eos illum ipsum itaque vero tempore!</p>
                <Button variant="contained">Contained</Button>
            </div>
        </div>
    );
};

export default Header;