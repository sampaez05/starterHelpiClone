import { Link } from 'react-router-dom';
import './App.css';
import { Button, Container} from 'react-bootstrap';
import { MultipleChoiceQuestion } from './QuestionFormat';
import { useState } from 'react';

export const DetailedQuestions = () => {
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
    const allAnswered = questionData.every(q => q.responded);

    const updateAnswer = (index: number, answer: string) => {
        const updated = [...questionData];
        updated[index] = {
            answer,
            responded: true
        };
        setQuestionData(updated);
    };
    const clearAnswer = ()=>{
        setQuestionData(
            questions.map(() => ({
                answer: '',
                responded: false
            }))
        );
    }
    return (
        <div>
            <header>
                Detailed Questions
                <Link to="/"><Button className="Buttons">Home</Button></Link>
            </header>
            <Container style={{
                 border: '2px solid black',
                 padding: '10px',
                 borderRadius: '5px',
                 width: '200px',
                textAlign: 'center'
            }}>
                Detailed Career assesment
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
            <p>The Detailed asic Career assesment asks a few simple questions, please select the answer you most feel fits.
                At the end of the assesment we will give you a general idea of possible jobs
            </p>
            <div>
                <Button onClick = {clearAnswer}>Clear</Button>
                <span>  </span>
                {allAnswered?
                <Button>Submit</Button>:
                <Button disabled = {!allAnswered}>Answer all Questions</Button>}
            </div>
        </div>
    );
}

