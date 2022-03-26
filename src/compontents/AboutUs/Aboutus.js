import React from 'react';
import OurTeachers from '../OurTeachers/OurTeachers';
import "./AboutUs.css"

const Aboutus = () => {
    return (
        <div className='mainDiv'>
            <h1 className='main-heading'>About Us</h1>
            <div className='header-div'>
                <hr className='horijental' />
            </div>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br /> nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam <br /> erat, sed diam voluptu</p>
            <img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Heiwa_elementary_school_18.jpg/1280px-Heiwa_elementary_school_18.jpg" alt="" />
            <br />
            <br />
            <br />
            <OurTeachers></OurTeachers>

        </div>
    );
};

export default Aboutus;