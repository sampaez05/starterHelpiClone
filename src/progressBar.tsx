import { useState } from 'react';
import './App.css';
import { Button, ProgressBar } from 'react-bootstrap';

export interface QuestionsProp {
    questionsResponded: number;
}

export function ProgBar ({questionsResponded}:QuestionsProp): JSX.Element{
    const [prog, setProg] = useState<number>(0);
    return (
        <div>
            <ProgressBar now={prog}/>
            <Button onClick={()=>setProg(questionsResponded+10)}>increase progress</Button>
        </div>
    );
}
