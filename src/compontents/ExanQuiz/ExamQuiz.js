import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import "./ExamQuiz.css"

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


const ExamQuiz = () => {
    return (
        <div>
            <Typography className='heading-quiz' variant='h4'>Are you ready for your next Exam?</Typography><br />
            <div>
                <Grid container spacing={2}>

                    <Grid item md={8} xs={12} sm={12}>
                        <div className='main-quiz'>
                            <Typography variant='h5'>{questions[0].questionText}</Typography>
                            <br />
                            <textarea cols="70" className='textArea-Exam' ></textarea><br />
                            <Button variant="contained">Submit</Button>



                        </div>

                    </Grid>
                    <Grid item md={4} xs={12} sm={12}>
                        <div className='main-quiz'>
                            <Typography variant='h5'>{questions[0].questionText}</Typography>

                            {
                                questions.map(question => <Button fullWidth variant="outlined">{question.questionText}</Button>)
                            }


                        </div>



                    </Grid>

                </Grid>
            </div>
        </div>
    );
};

export default ExamQuiz;