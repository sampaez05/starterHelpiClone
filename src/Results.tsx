import './App.css';
import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';
import { MultipleChoiceQuestion } from './QuestionFormat';
import { FormSubmittedPopup } from './formSubmittedPopup';
import { NavBar } from './NavBar';
import {chatSend} from './AI-code.js'
export const Results = () => {
    return (
        <div>
        <Container>{chatSend()}</Container>
        </div>
    );
}