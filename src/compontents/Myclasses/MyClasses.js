import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import "./MYClass.css"
import Alert from '@mui/material/Alert';
import useUserData from '../../hooks/useUserData';







const MyClasses = () => {
    const { userData } = useUserData()
    console.log(userData.class);
    const [videos, setVideos] = useState([])
    const RealtedVideo = videos.filter(video => video.ReadingClass == userData.class)
    console.log(RealtedVideo);
    const [videoLink, setVideoLink] = useState("https://www.youtube.com/embed/Sg2dDI5JBTA")

    useEffect(() => {
        fetch("https://fathomless-anchorage-10152.herokuapp.com/videos")
            .then(res => res.json())
            .then(data => setVideos(data))
    }, [])



    const handleVideoAddition = (vlink) => {
        setVideoLink(vlink)

    }
    return (
        <div>
            <Typography className='heading-quiz' variant='h4'>Are you ready for your next Lesson?</Typography><br />
            <div>
                <Grid container spacing={2}>

                    <Grid item md={8} xs={12} sm={12}>
                        <div className='main-quiz'>
                            <iframe width="100%" height="350" src={videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



                        </div>

                    </Grid>
                    <Grid item md={4} xs={12} sm={12}>
                        <div className='main-quiz height'>
                            <Typography variant="h4">Your Contents</Typography><br />

                            {
                                RealtedVideo.map(video => <div className='class-div'><div className="heading"><p>{video.classDate}</p></div><Button onClick={() => handleVideoAddition(video.firstVideoLink)} className='class-button' fullWidth>{video.firstVideoTitle}</Button><hr></hr><Button onClick={() => handleVideoAddition(video.secondVideoLink)} className='class-button' fullWidth >{video.secondVideoTitle}</Button><hr></hr><Button onClick={() => handleVideoAddition(video.thirdVideoLink)} className='class-button' fullWidth >{video.thirdVideoTitle}</Button><hr></hr><Button onClick={() => handleVideoAddition(video.fourthVideoLink)} className='class-button' fullWidth >{video.fourthVideoTitle}</Button></div>)
                            }






                        </div>



                    </Grid>

                </Grid>
            </div>
        </div>
    );
};

export default MyClasses;