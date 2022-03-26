import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import useUserData from '../../hooks/useUserData';



const AnnounceMent = () => {
    const { userData } = useUserData

    const [ok, setOk] = useState(false)
    const [announcements, setAnnouncements] = useState([])
    const [announcementTitle, setAnnouncementTitle] = useState([])
    const [announcementDesc, setAnnouncementDesc] = useState([])
    const announceMentObj = {
        title: announcementTitle,
        link: announcementDesc

    }
    console.log(announcementTitle, announcementDesc)


    useEffect(() => {
        fetch("https://fathomless-anchorage-10152.herokuapp.com/announceMent")
            .then(res => res.json())
            .then(data => setAnnouncements(data))

    }, [])


    return (
        <div>
            <Typography sx={{ textAlign: "center" }} variant='h4'>Announcements</Typography>
            <Grid container spacing={2}>

                <Grid item md={8} xs={12} sm={12}>

                    <img width="50%" src="https://img.freepik.com/free-vector/yellow-note-paper-with-red-pin_1284-42430.jpg?t=st=1647503192~exp=1647503792~hmac=234bdd72b266489712e5314c50c9963b41cb50e43fe4862ea6a50c4d096948b1&w=740" alt="" />

                </Grid>
                <Grid item md={4} xs={12} sm={12}>
                    <div className='main-quiz height'>
                        {
                            announcements.map(annoucement => <a target="_blank" href={annoucement.link}><Button fullWidth variant="outlined">{annoucement.title}</Button></a>)
                        }









                    </div>




                </Grid>
                <Grid item md={12} xs={12} sm={12}>





                </Grid>

            </Grid>
        </div>
    );
};

export default AnnounceMent;