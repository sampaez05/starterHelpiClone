
import { Link } from 'react-router-dom';
import './App.css';
import { Button } from 'react-bootstrap';

export const BasicQuestions = () => {
    return (
        <div>
            <header>Basic Questions</header>
            <Link to="/"><Button className="Buttons">Home</Button></Link>
        </div>
    );
}

