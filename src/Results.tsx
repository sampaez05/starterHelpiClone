import './App.css';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { chatSend } from './AI-code';
import jsPDF from 'jspdf';


export const Results = () => {
  const [response, setResponse] = useState<string>('Loading your results...');//changes our response and shows loading to start
  
  const downloadAsPDF = (): void => {
    const doc = new jsPDF();//make blank document

    const pageWidth = doc.internal.pageSize.getWidth();// gets width of the doc
    const maxLineWidth = pageWidth - 20;//Gets the Line width and subracts 20 for margins
    const lines = doc.splitTextToSize(response,maxLineWidth);//Makes the words/lines fit on page
    
    const pageHeight = doc.internal.pageSize.getHeight();//gets page height
    let cursorY:number = 10;//Keeps track of where the text is to prevent it from going off page
    const lineHeight = 10;//sets height of lines

    lines.forEach((line: string | string[]) => {
      if (cursorY + lineHeight > pageHeight - 10) {//height of line and space for page must be greater than the page height - margin
        doc.addPage();//adds a new page exceeding page length
        cursorY = 10;//reset y position to 10
      }
      doc.text(line, 10, cursorY);//writes next line of text 10 below previous
      cursorY += lineHeight;//Lowers where the next line will be
    });

    doc.save("Results.pdf"); // Download the pdf
  };

  useEffect(() => {
    const getResults = async () => {
      const gptResponse = await chatSend("Give me a career suggestion based on my answers."); // provide actual message if needed
      //await just waits until it gets a response of any kind "filling" the promise string of the GPT response
      if (gptResponse) {//we have the response
        setResponse(gptResponse);//set response to the gpt response
      } else {
        setResponse("Error");//no response despite the string being filled causes error
      }
    };
    getResults();//grabs results
  }, []);

  return (
    <div>
      <Container>
        <h2>Career Suggestions</h2>
        <p>{response}</p>{/* prints response as it changes*/}
        <button onClick={downloadAsPDF}>Download PDF</button>
      </Container>
    </div>
  );
};