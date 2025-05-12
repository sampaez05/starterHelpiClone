import './App.css';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { chatSend } from './AI-code';
import { getDynamicContent } from './StoreMessage';
import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
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
  
  //the ReactMarkdown helps make the response from ChatGPT prettier
  return (
    <div>
      <Container style={{ paddingTop: '12rem' }}>
        <h2>Career Suggestions</h2>
        <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
        {response}
      </ReactMarkdown>
      </Container>
    </div>
  );
};