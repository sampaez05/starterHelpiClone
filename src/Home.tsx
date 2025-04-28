import './App.css';
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { ChatBot } from './ChatBot';
import { useState } from 'react';

const Home = () => {
    const [showChatBot, setShowChatBot] = useState(false);
    return (
        <div className='App'>
            <div className='Body'>
                <Link to="/BasicQuestions"><Button className="Buttons">Basic Questions</Button></Link>
                <br></br>
                <Link to="/DetailedQuestions"><Button className="Buttons">Detailed Questions</Button></Link>
            </div>
            <div>
                {
                    showChatBot ? 
                    <Button className="Buttons" onClick={(e)=>setShowChatBot(!showChatBot)}>Close ChatBot</Button>
                    :
                    <Button className="Buttons" onClick={(e)=>setShowChatBot(!showChatBot)}>Open ChatBot</Button>
                }
                {showChatBot && <ChatBot/>}</div>
        </div>
    );
}
export default Home;