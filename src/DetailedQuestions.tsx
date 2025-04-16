import './App.css';
import { Button, Container} from 'react-bootstrap';
import { MultipleChoiceQuestion } from './QuestionFormat';
import { ProgBar } from './progressBar';
import { useState } from 'react';
import { FormSubmittedPopup } from './formSubmittedPopup';

export const DetailedQuestions = () => {
    const questions = [ 
        {
            questions: "Where would you ideally like to spend most of your working hours?",
            options: [
                "I feel most productive and comfortable working indoors, like in an office, lab, or studio setting.",
                "I thrive when working outdoors, whether that’s in nature, construction, or on the move.",
                "I enjoy a balance — some indoor tasks and some time spent outside or traveling.",
                "I’m flexible — the location of the work doesn’t really affect my performance or preference."
            ]
        },
        {
            questions: "What’s your ideal weekly work schedule in terms of hours?",
            options: [
                "I’m happy to work over 40 hours per week, especially if it’s something I’m passionate about.",
                "I prefer a standard full-time schedule of 30–40 hours per week.",
                "I’d like a lighter schedule of around 20–30 hours per week to allow for flexibility or personal time.",
                "I’m open to different schedules and don’t have a strong preference right now."
            ]
        },
        {
            questions: "How do you feel about traveling as part of your job?",
            options: [
                "I’d love a job that allows me to travel frequently — the more, the better!",
                "Occasional travel for work sounds exciting and manageable.",
                "I’d prefer to stay in one place and only travel when absolutely necessary.",
                "I’m indifferent — I’ll travel or stay local depending on what the job needs."
            ]
        },
        {
            questions: "What’s your preferred level of social interaction with coworkers?",
            options: [
                "I love building relationships and collaborating with coworkers throughout the day.",
                "I enjoy working with a team, but I also value solo work now and then.",
                "I prefer mostly independent work, with limited collaboration when necessary.",
                "I strongly prefer working alone and limiting interaction with others as much as possible."
            ]
        },
        {
            questions: "What’s your perspective on self-employment versus working for an organization?",
            options: [
                "I’m determined to be my own boss and run my own business or freelance career.",
                "I’d ideally like to work for myself, but I’m open to collaborating with others.",
                "I’d rather work under a company or organization where roles and responsibilities are clearly defined.",
                "I strongly prefer being an employee rather than running the show myself."
            ]
        },
        {
            questions: "Which fields or industries are you most drawn to?",
            options: [
                "STEM — Science, Technology, Engineering, or Math",
                "The Arts — Creative fields like design, writing, performing, or visual arts",
                "Business — Marketing, finance, entrepreneurship, etc.",
                "Politics or Social Change — Law, government, activism, etc."
            ]
        },
        {
            questions: "What kind of work feels most fulfilling to you?",
            options: [
                "I enjoy mentally stimulating work — analyzing, solving problems, and coming up with ideas.",
                "I prefer hands-on, physical work that involves building, moving, or creating with my body.",
                "I’m happiest when there’s a balance — some thinking, some doing."
            ]
        },
        {
            questions: "How do you feel about interacting with customers, clients, or the general public?",
            options: [
                "I genuinely enjoy helping and talking to people throughout my workday.",
                "A moderate amount of customer interaction is fine with me.",
                "I’ll do it if the job requires it, but it’s not my favorite part.",
                "I actively avoid jobs that require direct interaction with strangers."
            ]
        },
        {
            questions: "What kind of employment structure are you looking for?",
            options: [
                "I’d prefer a long-term, stable job with room to grow.",
                "I like the freedom and flexibility of short-term or contract-based work.",
                "I’m open to either type of opportunity, depending on the role and benefits."
            ]
        },
        {
            questions: "What role do you see yourself playing within a team or company?",
            options: [
                "I enjoy leadership roles and helping to shape strategy, direction, and decisions.",
                "I’d rather focus on the day-to-day tasks and be on the front lines doing the work.",
                "I could see myself doing a bit of both — leading when needed, but also contributing directly."
            ]
        }
    ];

    const [openPopup, setOpenPopup] = useState<boolean>(false); //state for whether or not the popup should be on the screen

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
                        question={q.questions}
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
            <Button className="Buttons" onClick = {clearAnswer}>Clear</Button>{/* button that calls the clear answer function*/}
                <span>  </span>{/* below shows submit button if all answered and an answer all questions button otherwise */}
                {allAnswered? 
                <Button className="Buttons" onClick={()=>setOpenPopup(true)}>Submit</Button>: //button sets openPopup to tree when the form is submitted
                <Button className="Buttons" disabled = {!allAnswered}>Answer all Questions</Button>}
                {openPopup && <FormSubmittedPopup closePopup={()=>setOpenPopup(false)}/>} {/* displays FormSubmittedPopup component when openPopup is true*/}
            </div>
        </div>
    );
}

