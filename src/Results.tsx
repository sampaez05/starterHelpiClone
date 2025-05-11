import './App.css';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { chatSend } from './AI-code';
import { getDynamicContent } from './StoreMessage';

export const Results = () => {
  const [response, setResponse] = useState<string>('Loading your results...');

  useEffect(() => {
    const getResults = async () => {
      const gptResponse = await chatSend(getDynamicContent()); // provide actual message if needed
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