import './App.css';
import { Button, Container } from 'react-bootstrap';
import {ProgBar} from './progressBar';
import { useState } from 'react';
import { MultipleChoiceQuestion } from './QuestionFormat';
import { FormSubmittedPopup } from './formSubmittedPopup';
import { NavBar } from './NavBar';
import { chatSend } from './AI-code';

export const BasicQuestions = () => {
    const questions = [
        {question: "Where would you like to be when doing your job",
          options: ["Indoor", "Outdoor", "A mix of both", "No preference"]},
        {question: "How much do you want to work per week?",
          options: ["40+ Hours a week", "30-40 hours", "20-30 hours", "No Preference"]},
        {question: "How do you feel about travelling for work?",
          options: ["I want to travel all the time", "I'd be okay with it sometimes", "Only if I absolutely need to"]},
        {question: "How much socializing do you want to do with coworkers",
          options: ["I’d like to spend lots of time with coworkers","I’d be okay spending time with coworkers","I’d accept interacting with people occasionally","I’d rather die than see another person’s face"]},
        {question: "How do you feel about self-employment?",
          options: ["I only want to work for myself","I’d prefer to work for myself","I’d prefer to work for someone else","I only want to work for someone else"]},
        {question: "What areas would you like to work in",
        options: ["STEM","Arts","Business","Politics"]},
        {question: "Do you want to do more physical labor or mental work",
            options: ["I want to do mental work","I want to work with my hands","A good mix of both"]},
        {question: "How much interaction do you want with consumers",
            options: ["I love talking to people","Some interaction is okay","I will if I have to","I’d rather eat my own foot than talk to a stranger"]},
        {question: "Do you prefer long-term employment or short-term contract work?",
            options: ["Long term is the way to go","I prefer contracted work","Either works"]},
        {question: "Would you like to be in a leadership position or be more boots on the ground doing the actual work",
            options: ["I prefer to help with the bigger picture","I prefer doing the day-to-day work","Maybe a bit of both"]},
      ];
    
    const [numResponded, setNumResponded] = useState<number>(0); //state for how many questions have been responded to
    
    const [openPopup, setOpenPopup] = useState<boolean>(false); //state for whether or not the popup should be on the screen
      // Set up state for answers and responses dynamically
    const [questionData, setQuestionData] = useState(
        questions.map(() => ({//sets answer to empty and response state false
            answer: '',
            responded: false
        }))
    );
    const [answerData, setAnswerData] = useState(
        questions.map((q,index) => ({//sets answer to empty and response state false
        question: q.question,
        answer: ""
    })));
    const allAnswered = questionData.every(q => q.responded);//A value that checks for if all questions on page answered
    const sendGPTmessage = ()=>{
        let message = "This is the latest profile for you to evaluate. The questions are presented in order, give your evaluation of compatible jobs or professions based on these answers: ";
        for(let i = 0;i<10;i++){
        message += "\nquestion: " + answerData[i].question + "\nanswer: " + answerData[i].answer;
        }
        chatSend(message);

    }
    const updateAnswer = (index: number, answer: string) => {//Updates the answer and sets the responded state to true
        const updated = [...questionData];
        updated[index] = {
            answer,
            responded: true
        };
        setQuestionData(updated);//sets the question data to the new
        const updatedAnswers = [...answerData];
        updatedAnswers[index].answer = answer;
        setAnswerData(updatedAnswers);
        console.log(answerData);
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
    const handleSubmitClick = ()=>{
        sendGPTmessage();
        setOpenPopup(true);
    };
    return (
        <div className='App'>
            <header className='App-header'>
                Basic Question Assessment
                <NavBar/>
                <ProgBar questionsResponded={numResponded} numberOfQs={questions.length}/>
            </header>
            <Container className='Questions-body' style={{
                 border: '0px solid black',
                 borderRadius: '5px',
                textAlign: 'left',
                position: 'relative',
            }}>
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
                <Button className="Buttons" onClick = {clearAnswer}>Clear</Button>{/* button that calls the clear answer function*/}
                <span>  </span>{/* below shows submit button if all answered and an answer all questions button otherwise */}
                    {allAnswered? 
                <Button className="Buttons" onClick={()=>handleSubmitClick()}>Submit</Button>: //button sets openPopup to tree when the form is submitted
                <Button className="Buttons" disabled = {!allAnswered}>Answer all Questions</Button>}
                {openPopup && <FormSubmittedPopup closePopup={()=>setOpenPopup(false)}/>} {/* displays FormSubmittedPopup component when openPopup is true*/}
            </div>
        </div>
    );
}