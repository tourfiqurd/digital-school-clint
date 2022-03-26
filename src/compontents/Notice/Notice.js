import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Notice = () => {
    const [announcements, setAnnouncements] = useState([])
    const relatedAnnounceMent = announcements.reverse().slice(0, 10)
    useEffect(() => {
        fetch("https://fathomless-anchorage-10152.herokuapp.com/announceMent")
            .then(res => res.json())
            .then(data => setAnnouncements(data))

    }, [])
    return (
        <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
                <div>
                    <img width="90%" src="https://img.freepik.com/free-vector/yellow-note-paper-with-red-pin_1284-42430.jpg?t=st=1647503192~exp=1647503792~hmac=234bdd72b266489712e5314c50c9963b41cb50e43fe4862ea6a50c4d096948b1&w=740" alt="" />
                </div>

            </Grid>
            <Grid item md={6} xs={12}>

                <h1>Notice For All</h1>
                <div className='main-login'>
                    {
                        relatedAnnounceMent.map(annoucement => <a target="_blank" href={annoucement.link}><Button fullWidth variant="outlined">{annoucement.title}</Button></a>)
                    }




                </div>

            </Grid>

        </Grid>
    );
};

export default Notice;