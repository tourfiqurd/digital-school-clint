import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';


const AddLEQ = () => {


    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [firstVideoTitle, setFirstVideoTitle] = useState("")
    const [firstVideoLink, setFirstVideoLink] = useState("")
    const [SecondVideoTitle, setSecondVideoTitle] = useState("")
    const [SecondVideoLink, setSecondVideoLink] = useState("")
    const [ThirdVideoTitle, setThirdVideoTitle] = useState("")
    const [ThirdVideoLink, setThirdVideoLink] = useState("")
    const [FourthVideoTitle, setFourthVideoTitle] = useState("")
    const [FourthVideoLink, setFourthVideoLink] = useState("")
    const [classDate, setClassDate] = useState("")
    const [QuizClass, setQuizClass] = useState("")
    const [QuizTitle, setQuizTitle] = useState("")
    const [QuizMark, setQuizMark] = useState("")
    const [QuizLink, setQuizLink] = useState("")
    const [ok, setOk] = useState(false)


    const [ReadingClass, setReadingClass] = useState("")

    const [lesson, setLesson] = useState({})



    const handleAddLesson = () => {
        const lesson = {
            firstVideoTitle: firstVideoTitle,
            firstVideoLink: firstVideoLink,
            secondVideoTitle: SecondVideoTitle,
            secondVideoLink: SecondVideoLink,
            thirdVideoTitle: ThirdVideoTitle,
            thirdVideoLink: ThirdVideoLink,
            fourthVideoTitle: FourthVideoTitle,
            fourthVideoLink: FourthVideoLink,
            ReadingClass: ReadingClass,
            classDate: classDate




        }
        console.log(lesson);
        fetch("https://fathomless-anchorage-10152.herokuapp.com/videos", {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            }, body: JSON.stringify(lesson)
        }).then(res => {
            if (res.ok) {
                setOk(true)
            }
        })

    }
    const handleAddQuiz = () => {
        const Quizlesson = {
            QuizClass: QuizClass,
            QuizTitle: QuizTitle,
            QuizMark: QuizMark,
            QuizLink: QuizLink,





        }

        fetch("https://fathomless-anchorage-10152.herokuapp.com/quizQuestions", {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            }, body: JSON.stringify(Quizlesson)
        }).then(res => {
            if (res.ok) {
                setOk(true)
            }
        })

    }
    const handleFirstVideoTitle = (e) => {
        setFirstVideoTitle(e.target.value)
    }
    const handleFirstVideoLink = (e) => {
        setFirstVideoLink(e.target.value)
    }
    const handleSecondVideoTitle = (e) => {
        setSecondVideoTitle(e.target.value)
    }
    const handleSecondVideoLink = (e) => {
        setSecondVideoLink(e.target.value)
    }
    const handleThirdVideoTitle = (e) => {
        setThirdVideoTitle(e.target.value)
    }
    const handleThirdVideoLink = (e) => {
        setThirdVideoLink(e.target.value)
    }
    const handleFourthVideoTitle = (e) => {
        setFourthVideoTitle(e.target.value)
    }
    const handleFourthVideoLink = (e) => {
        setFourthVideoLink(e.target.value)
    }
    const handleClassDate = e => {
        setClassDate(e.target.value)

    }

    const handleChange = (event) => {
        setReadingClass(event.target.value);
    };
    const handleQuizClassChange = e => {
        setQuizClass(e.target.value)

    }
    const handleQuizTitle = e => {
        setQuizTitle(e.target.value)

    }
    const handleQuizMark = e => {
        setQuizMark(e.target.value)

    }
    const HandleQuizLink = e => {
        setQuizLink(e.target.value)

    }



    return (
        <div>
            <Typography className='heading-quiz' variant='h4'>Are you ready for your next Lesson?</Typography><br />
            <div>
                <Grid container spacing={2}>

                    <Grid item md={6} xs={12} sm={12}>
                        <div className='main-quiz'>
                            <Typography variant='h5'>Add Lesson Module</Typography><br />



                            <TextField onBlur={handleFirstVideoTitle} fullWidth id="standard-basic" label="First Video Title" size='50' variant="outlined" /><br /><br />
                            <TextField type="number" onBlur={handleChange} fullWidth id="standard-basic" label="Class Here" size='50' variant="outlined" /><br /><br />
                            <TextField onBlur={handleFirstVideoLink} fullWidth id="standard-basic" label="First Video Link" size='50' variant="outlined" /><br /><br />
                            <TextField onBlur={handleSecondVideoTitle} fullWidth id="standard-basic" label="Second Video Title" size='50' variant="outlined" /><br /><br />
                            <TextField onBlur={handleSecondVideoLink} fullWidth id="standard-basic" label="Second Video Link" size='50' variant="outlined" /><br /><br />
                            <TextField onBlur={handleThirdVideoTitle} fullWidth id="standard-basic" label="Third Video Title" size='50' variant="outlined" /><br /><br />
                            <TextField onBlur={handleThirdVideoLink} fullWidth id="standard-basic" label="Third Video Link" size='50' variant="outlined" /><br /><br />
                            <TextField onBlur={handleFourthVideoTitle} fullWidth id="standard-basic" label="Fourth Video Title" size='50' variant="outlined" /><br /><br />
                            <TextField onBlur={handleFourthVideoLink} fullWidth id="standard-basic" label="Fourth Video Link" size='50' variant="outlined" /><br /><br />
                            <TextField onBlur={handleClassDate} fullWidth id="standard-basic" label="Class  And Dayname Date Here" size='50' variant="outlined" /><br /><br />

                            {
                                ok && <Alert severity="success">Your Lesson Added SuccessFully</Alert>
                            }

                            <Button onClick={handleAddLesson} variant="contained">Add Lesson</Button>


                        </div>

                    </Grid>
                    <Grid item md={6} xs={12} sm={12}>
                        <div className='main-quiz'>
                            <Typography variant='h5'>Add Quiz Module</Typography><br />


                            <TextField type="number" onBlur={handleQuizClassChange} fullWidth id="standard-basic" label="Class Here" size='50' variant="outlined" /><br /><br />
                            <TextField onBlur={handleQuizTitle} fullWidth id="standard-basic" label="Quiz Title" size='50' variant="outlined" /><br /><br />
                            <TextField onBlur={handleQuizMark} fullWidth id="standard-basic" label="Quiz Mark" size='50' variant="outlined" /><br /><br />
                            <TextField onBlur={HandleQuizLink} fullWidth id="standard-basic" label="Quiz Link" size='50' variant="outlined" /><br /><br />

                            {
                                ok && <Alert severity="success">Your Lesson Added SuccessFully</Alert>
                            }

                            <Button onClick={handleAddQuiz} variant="contained">Add Lesson</Button>


                        </div>

                    </Grid>


                </Grid>
            </div>
        </div>
    );
};

export default AddLEQ;