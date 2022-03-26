import React from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebage.config';

const initialigeAuthentication = () => {
    initializeApp(firebaseConfig);
};

export default initialigeAuthentication;