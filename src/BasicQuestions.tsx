
import { Link } from 'react-router-dom';
import './App.css';
import { Button, Container, ProgressBar } from 'react-bootstrap';
import {ProgBar} from './progressBar';
import { useState } from 'react';
import { MultipleChoiceQuestion } from './QuestionFormat';

export const BasicQuestions = () => {
    const questions = [
        {question: "Where would you like to be when doing your job",
          options: ["Indoor", "Outdoor", "A mix of both", "No preference"]},
        {question: "How much do you want to work per week?",
          options: ["40+ Hours a week", "30-40 hours", "20-30 hours", "No Preference"]},
        {question: "How do you feel about travelling for work?",
          options: ["I want to travel all the time", "I'd be okay with it sometimes", "Only if I absolutely need to"]}
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
                Basic Questions
                <ProgBar questionsResponded={numResponded} numberOfQs={questions.length}/>
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
            <p>The Basic Career assesment asks a few simple questions, please select the answer you most feel fits.
                At the end of the assesment we will give you a general idea of possible jobs
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