import { useState } from 'react';
import './App.css';
import { Button, ProgressBar } from 'react-bootstrap';

export const ProgBar = () => {
    const [prog, setProg] = useState<number>(0);
    return (
        <div>
            <ProgressBar now={prog}/>
            <Button onClick={()=>setProg(prog+10)}>increase progress</Button>
        </div>
        
    )
}
