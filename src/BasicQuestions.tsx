
import { Link } from 'react-router-dom';
import './App.css';
import { Button, Container } from 'react-bootstrap';

export const BasicQuestions = () => {
    return (
        <div>
            <header>Basic Questions
            <Link to="/"><Button className="Buttons">Home</Button></Link></header>
            <Container>
                Basic Career assesment
            </Container>
            <p>The basic Career assesment asks a few simple questions, please select the answer you most feel fits.
                At the end of the assesment we will give you a general idea of possible jobs
            </p>
        </div>
    );
}

