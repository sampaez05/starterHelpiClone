import './App.css';
import { Button, Container} from 'react-bootstrap';
import { MultipleChoiceQuestion } from './QuestionFormat';
import { ProgBar } from './progressBar';
import { useState } from 'react';

export const DetailedQuestions = () => {
    const questions = [//An array of questions built of the question and the possible answers
        {
            question: "what number is so dang cool",
            options: ["1", "2", "3"]
        },
        {
            question: "what number is so dang EEVIL",
            options: ["6", "5", "4"]
        }
    ];

    const [numResponded, setNumResponded] = useState<number>(0); //state for how many questions have been responded to

    // Set up state for answers and responses dynamically
    const [questionData, setQuestionData] = useState(
        questions.map(() => ({//sets answer to empty and response state false
            answer: '',
            responded: false
        }))
    );
    const allAnswered = questionData.every(q => q.responded);//A value that checks for if all questions on page answered

    const updateAnswer = (index: number, answer: string) => {//Updates the answer and sets the responded state to true
        const updated = [...questionData];
        updated[index] = {
            answer,
            responded: true
        };
        setQuestionData(updated);//sets the question data to the new

        //finds how many questions have been responded to and set the proper state to this value
        const respondedQuestions = updated.filter(q=>q.responded)
        console.log(respondedQuestions.length);
        setNumResponded(respondedQuestions.length);
    };
    const clearAnswer = ()=>{//resets question answer state to empty
        setQuestionData(
            questions.map(() => ({
                answer: '',
                responded: false
            }))
        );

        setNumResponded(0); //resets the numResponded state to 0
    }
    return (
        <div>
            <header>
                Detailed Questions
                <ProgBar questionsResponded={numResponded} numberOfQs={questions.length}/>
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
                    //Runs through the questions array and sends info to question format
                    <MultipleChoiceQuestion 
                        key={index}
                        question={q.question}
                        options={q.options}
                        selected={questionData[index].answer}
                        setSelected={(a) => updateAnswer(index, a)}//changes on radio button click
                    />
                ))}

            </Container>
            <p>The Detailed Career assesment asks a few detailed questions, please select the answer you most feel fits.
                At the end of the assesment we will give you an idea of possible jobs
            </p>
            <div>
                <Button onClick = {clearAnswer}>Clear</Button>{/* button that calls the clear answer function*/}
                <span>  </span>{/* below shows submit button if all answered and an answer all questions button otherwise */}
                {allAnswered? 
                <Button>Submit</Button>:
                <Button disabled = {!allAnswered}>Answer all Questions</Button>}
            </div>
        </div>
    );
}

