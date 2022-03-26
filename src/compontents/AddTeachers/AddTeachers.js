
import React, { useEffect, useState } from 'react';
import { FormControlLabel, Radio, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

import RadioGroup from '@mui/material/RadioGroup';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import useAuth from './../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const AddTeachers = () => {
    const [teachersName, setTeachersName] = useState()
    const [teachersCollection, setTeachersCollection] = useState()
    const [teachersEmail, setTeachersEmail] = useState()
    const [teachersMobile, setTteachersMobile] = useState()
    const [classTeacher, setClassTeacher] = useState()
    const [ok, setOk] = useState(false)
    const [Anok, setAnok] = useState(false)
    const [announcements, setAnnouncements] = useState([])
    const [announcementTitle, setAnnouncementTitle] = useState([])
    const [announcementDesc, setAnnouncementDesc] = useState([])

    const announceMentObj = {
        title: announcementTitle,
        link: announcementDesc

    }
    console.log(announceMentObj)

    console.log(teachersCollection)

    const handleTeachersName = (e) => {
        setTeachersName(e.target.value)

    }
    const handleTeachersEmail = (e) => {
        setTeachersEmail(e.target.value)

    }
    const handleTeachersMobileNumber = (e) => {
        setTteachersMobile(e.target.value)

    }
    const handelClassTeaher = (e) => {
        setClassTeacher(e.target.value)
    }
    const handleTeachersRegestration = () => {
        const ResisterdTeacher = {
            name: teachersName,
            role: "Teacher",
            class: classTeacher,

            email: teachersEmail,
            mobileNumber: teachersMobile
        }
        fetch("https://fathomless-anchorage-10152.herokuapp.com/users", {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            }, body: JSON.stringify(ResisterdTeacher)
        }).then(res => {
            if (res.ok) {
                setOk(true)
            }
        })


    }
    const { user } = useAuth()
    useEffect(() => {
        fetch("https://fathomless-anchorage-10152.herokuapp.com/teachers")
            .then(res => res.json())
            .then(data => setTeachersCollection(data))
    }, [])
    const handleAnnouncementSubmit = e => {
        fetch("https://fathomless-anchorage-10152.herokuapp.com/announceMent", {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            }, body: JSON.stringify(announceMentObj)

        })
        setAnok(true)


    }
    const handleAnnouncementTitle = e => {
        setAnnouncementTitle(e.target.value)

    }
    const handleAnnouncementDesc = e => {
        setAnnouncementDesc(e.target.value)

    }
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img width="100%" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?t=st=1647508779~exp=1647509379~hmac=db44bf732ed4f371d59d067282e6c4fb94942dd77c7272532023cab46d538ebd&w=740" alt="" />

                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='h3'>Teachers Registration</Typography><br />

                    <TextField onBlur={handleTeachersName} fullWidth id="standard-basic" label="Name Here" size='50' variant="outlined" /><br /><br />
                    <TextField type="number" onBlur={handelClassTeaher} fullWidth id="standard-basic" label="Class Teacher of Here" size='50' variant="outlined" /><br /><br />
                    <TextField onBlur={handleTeachersEmail} fullWidth id="standard-basic" label="Email ID" size='50' variant="outlined" /><br /><br />
                    <TextField onBlur={handleTeachersMobileNumber} fullWidth id="standard-basic" label="Mobile Number" size='50' variant="outlined" /><br /><br />

                    {
                        ok && <Alert severity="success"> Teacher Added SuccessFully</Alert>
                    }
                    <Button onClick={handleTeachersRegestration} variant="contained">Submit</Button>


                </Grid>
                <Grid item xs={12} md={12}>
                    <div className='main-quiz height'>
                        <Typography variant="h4">Add AnnounceMents</Typography><br />
                        <TextField onClick={handleAnnouncementTitle} fullWidth id="standard-basic" label="Title  Here" size='50' variant="outlined" /><br /><br />
                        <TextField onClick={handleAnnouncementDesc} fullWidth id="standard-basic" label="Link  Here" size='50' variant="outlined" /><br /><br />
                        {
                            Anok && <Alert severity="success"> AnnounceMent Added SuccessFully</Alert>
                        }
                        <Button onClick={handleAnnouncementSubmit} variant="contained">Add Announcement</Button>









                    </div>


                </Grid>


            </Grid>
            <div>


            </div>
        </div>
    );
};

export default AddTeachers;