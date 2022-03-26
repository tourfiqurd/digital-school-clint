import React from 'react';
import Grid from '@mui/material/Grid';
const images = [
    { link: 'https://media.gettyimages.com/photos/red-brick-high-school-building-exterior-picture-id171306436?s=612x612', },
    { link: 'https://cdn.abcotvs.com/dip/images/6017871_031620-shutterstock-schools-img.jpg', },
    { link: 'https://images.livemint.com/img/2021/07/01/1600x900/MP2-kYiB--621x414@LiveMint_1625139958457.jpg', },
    { link: 'https://www.sun-sentinel.com/resizer/MSbQSMXcChpf60rCC_qMtYkh6gs=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/GUNNVGFUBNRUG3PKATTZD44WAU.jpg', },
    { link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Heiwa_elementary_school_18.jpg/1280px-Heiwa_elementary_school_18.jpg', },
]

const Gallary = () => {
    return (
        <div style={{ padding: "20px", textAlign: 'center' }}>
            <h1>Gallary</h1>
            <br />
            <Grid container spacing={2}>
                {
                    images.map(imge => <Grid item xs={12} md={6}>

                        <img width="100%" src={imge.link} alt="" />

                    </Grid>)

                }




            </Grid>

        </div>
    );
};

export default Gallary;