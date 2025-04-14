
import { Link } from 'react-router-dom';
import './App.css';
import { Button, Container} from 'react-bootstrap';
import { MultipleChoiceQuestion } from './QuestionFormat';
import { useState } from 'react';

export const BasicQuestions = () => {
    const questions = [
        {
            question: "what number is so dang cool",
            options: ["1", "2", "3"]
        },
        {
            question: "what number is so dang EEVIL",
            options: ["6", "5", "4"]
        }
    ];

    // Set up state for answers and responses dynamically
    const [questionData, setQuestionData] = useState(
        questions.map(() => ({
            answer: '',
            responded: false
        }))
    );
    const updateAnswer = (index: number, answer: string) => {
        const updated = [...questionData];
        updated[index] = {
            answer,
            responded: true
        };
        setQuestionData(updated);
    };
    return (
        <div>
            <header>
                Basic Questions
                <Link to="/"><Button className="Buttons">Home</Button></Link>
            </header>
            <Container style={{
                 border: '2px solid black',
                 padding: '10px',
                 borderRadius: '5px',
                 width: '200px',
                textAlign: 'center'
            }}>
                Basic Career assesment

                {questions.map((q, index) => (
                    <MultipleChoiceQuestion
                        key={index}
                        question={q.question}
                        options={q.options}
                        selected={questionData[index].answer}
                        setSelected={(a) => updateAnswer(index, a)}
                    />
                ))}
            </Container>
            <p>The Basic Career assesment asks a few simple questions, please select the answer you most feel fits.
            </p>
        </div>
    );
}

