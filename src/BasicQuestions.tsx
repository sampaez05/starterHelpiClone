
import { Link } from 'react-router-dom';
import './App.css';
import { Button, Container} from 'react-bootstrap';
import { MultipleChoiceQuestion } from './QuestionFormat';

export const BasicQuestions = () => {
    return (
        <div>
            <header>Basic Questions</header>
            <Container style={{
                 border: '2px solid black',
                 padding: '10px',
                 borderRadius: '5px',
                 width: '200px',
                textAlign: 'center'}}>
                Basic Career assesment
                <MultipleChoiceQuestion
                question = "what number is so dang cool"
                selected = ""
                options={["1", "2", "3"]
                }
            />
            <MultipleChoiceQuestion
                question = "what number is so dang EEVIL"
                selected = ""
                options={["6", "5", "4"]
                }
            />
            </Container>
            <p>The Basic Career assesment asks a few simple questions, please select the answer you most feel fits.
            </p>
        </div>
    );
}

