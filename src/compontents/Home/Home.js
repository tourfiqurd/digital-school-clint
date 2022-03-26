import React from 'react';
import Aboutus from '../AboutUs/Aboutus';
import Navigation from '../Appbar/Navigation';
import Header from './Header/Header';
import OurProducts from './../OurProducts/OurProducts';
import LearnUs from '../LernUs/LearnUs';
import OurTeachers from '../OurTeachers/OurTeachers';
import Notice from './../Notice/Notice';
import Gallary from './../Gallary/Gallary';
import Contract from '../ContractForm/Contract';



const Home = () => {
    return (
        <div>



            <Header></Header>
            <br />
            <br />
            <br />
            <Notice></Notice>
            <br />
            <br />
            <br />
            <OurTeachers></OurTeachers>
            <br />
            <br />
            <br />
            <Gallary></Gallary>
            <br />
            <br />
            <br />
            <Contract></Contract>


        </div>
    );
};

export default Home;