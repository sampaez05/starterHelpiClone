import './App.css';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { NavBar } from './NavBar';
import { chatSend } from './AI-code';

export const Results = () => {
  const [response, setResponse] = useState<string>('Loading your results...');

  useEffect(() => {
    const getResults = async () => {
      const gptResponse = await chatSend("Give me a career suggestion based on my answers."); // provide actual message if needed
      if (gptResponse) {
        setResponse(gptResponse);
      } else {
        setResponse("Something went wrong. Try again later.");
      }
    };
    getResults();
  }, []);

  return (
    <div>
      <Container>
        <h2>Career Suggestions</h2>
        <p>{response}</p>
      </Container>
    </div>
  );
};