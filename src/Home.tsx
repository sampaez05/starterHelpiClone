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
                <Link to="/BasicQuestions"><Button className="Buttons">
                    Basic Questions
                    <p className='description'>The Basic Career assesment asks a few simple questions, please select the answer you most feel fits.
                    At the end of the assesment we will give you a general idea of possible jobs</p>
                    </Button>
                </Link>
                <br></br>
                <Link to="/DetailedQuestions"><Button className="Buttons">
                    Detailed Questions
                    <p className='description'>The Detailed Career assesment asks a few detailed questions, please select the answer you most feel fits.
                    At the end of the assesment we will give you an idea of possible jobs
                    </p>
                    </Button>
                </Link>
            </div>
            <div>
                {/**Below displays a button to interact with the chatBot
                 * if the chat box is already open then the button says Close ChatBot
                 * if the chat box is not open then the button says Open ChatBot
                 * Then, if the Open ChatBot button is clicked, the ChatBot component will display
                 */}
                {
                    showChatBot ? 
                    <Button className="Buttons" onClick={(e)=>setShowChatBot(!showChatBot)}>Close ChatBot</Button> 
                    :
                    <Button className="Buttons" onClick={(e)=>setShowChatBot(!showChatBot)}>Open ChatBot</Button>
                }
                {showChatBot && <ChatBot closePopup={()=>setShowChatBot(false)}/>}
            </div>
        </div>
    );
}
export default Home;