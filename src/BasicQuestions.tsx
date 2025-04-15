
import { Link } from 'react-router-dom';
import './App.css';
import { Container} from 'react-bootstrap';
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
                {questions.map((q, index) => (
                <MultipleChoiceQuestion
                  key={index}
                  question={q.question}
                  selected= ""
                  options={q.options}
                />
              ))}
            </Container>
            <p>The Basic Career assesment asks a few simple questions, please select the answer you most feel fits.
            </p>
        </div>
    );
}

