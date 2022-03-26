import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useUserData from '../../hooks/useUserData';

const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
];

const QuizExam = () => {
    const { userData } = useUserData()
    console.log(userData.class);
    const [quizes, setQuizes] = useState([])

    const [videoLink, setVideoLink] = useState("https://docs.google.com/forms/d/e/1FAIpQLSfE5qaSWdDZXh4AY7J-PtUrsi4ykxIKB8nbSnMPz8wTthuvdw/viewform?embedded=true")
    const filterdQuiz = quizes.filter(quiz => quiz.QuizClass == userData.class)

    useEffect(() => {
        fetch(`https://fathomless-anchorage-10152.herokuapp.com/quizQuestions`)
            .then(res => res.json())
            .then(data => setQuizes(data))

    }, []);
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
                            <iframe src={videoLink} width="640" height="837" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>






                        </div>

                    </Grid>
                    <Grid item md={4} xs={12} sm={12}>
                        <div className='main-quiz height'>
                            <Typography variant="h4">Your Contents</Typography><br />

                            {
                                filterdQuiz.map(quiz => <Button fullWidth sx={{ marginBottom: "20px", padding: "20px" }} variant="contained" onClick={() => handleVideoAddition(quiz.QuizLink)} className='class-button'>{quiz.QuizTitle}</Button>)
                            }






                        </div>



                    </Grid>

                </Grid>
            </div>
        </div>
    );
};

export default QuizExam;