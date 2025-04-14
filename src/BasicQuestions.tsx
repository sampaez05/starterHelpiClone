
import { Link } from 'react-router-dom';
import './App.css';
import { Form, Button, Container } from 'react-bootstrap';

export const BasicQuestions = () => {
    const questions = [
        "What is your name?",
        "What is your favorite color?",
        "What is the airspeed velocity of an unladen swallow?",
      ];
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
            <Form>
      {questions.map((question, index) => (
        <Form.Group key={index} className="mb-3">
          <Form.Label>{question}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your answer"
            name={`question-${index}`}
          />
        </Form.Group>
      ))}
    </Form>
        </div>
    );
}

