import { useState } from 'react';
import './App.css';
import { Button, ProgressBar } from 'react-bootstrap';

export interface QuestionsProp {
    questionsResponded: number;
    numberOfQs: number;
}

export function ProgBar ({questionsResponded, numberOfQs}:QuestionsProp): JSX.Element{
    const prog:number = (questionsResponded/numberOfQs)*100; //this sets prog to the percent of questions that's been completed
    return (
        <div className="progress-container">
            <ProgressBar className="prog-bar" now={prog}/>
        </div>
    );
}
