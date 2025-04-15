import { Link } from 'react-router-dom';
import './App.css';
import { Container} from 'react-bootstrap';
import { MultipleChoiceQuestion } from './QuestionFormat';

export const DetailedQuestions = () => {
    return (
        <div>
            <header>Detailed Questions</header>
            <Container style={{
                 border: '2px solid black',
                 padding: '10px',
                 borderRadius: '5px',
                 width: '200px',
                textAlign: 'center'}}>
                Detailed Career Assesment
                <MultipleChoiceQuestion
                question = "what number is so dang cool"
                selected = ""
                options={["1", "2", "3"]
                }
            />
            </Container>
            <p>The Detailed asic Career assesment asks a few simple questions, please select the answer you most feel fits.
                At the end of the assesment we will give you a general idea of possible jobs
            </p>
        </div>
    );
}

