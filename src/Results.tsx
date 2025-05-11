import './App.css';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { chatSend } from './AI-code';
import { getDynamicContent } from './StoreMessage';
import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import jsPDF from 'jspdf';


export const Results = () => {
  const [response, setResponse] = useState<string>('Loading your results...');//changes our response and shows loading to start
  
  const downloadAsPDF = (): void => {
    const doc = new jsPDF();//make blank document

    const pageWidth = doc.internal.pageSize.getWidth();// gets width of the doc
    const maxLineWidth = pageWidth - 20;//Gets the Line width and subracts 20 for margins
    const lines = doc.splitTextToSize(response,maxLineWidth);//Makes the words/lines fit on page

    doc.setFont("helvetica", "bold");//sets the doc font duuuh
    doc.setFontSize(18);//sets the size for the header
    doc.text("Career Suggestions", 10, 10);
    
    const pageHeight = doc.internal.pageSize.getHeight();//gets page height
    let cursorY:number = 10;//Keeps track of where the text is to prevent it from going off page
    const lineHeight = 10;//sets height of lines

    cursorY += 15; // add space below header
    doc.setFont("helvetica", "normal");//sets font for body text
    doc.setFontSize(12);//sets the font size for body text

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
      const gptResponse = await chatSend(getDynamicContent()); // provide actual message if needed
      if (gptResponse) {
        setResponse(gptResponse);
      } else {
        setResponse("Error");//no response despite the string being filled causes error
      }
    };
    getResults();//grabs results
  }, []);

  return (
    <div>
      <Container style={{ paddingTop: '15rem' }}>
        <h2>Career Suggestions</h2>
        <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
        {response}
      </ReactMarkdown>
        <button onClick={downloadAsPDF}>Download PDF</button>
      </Container>
    </div>
  );
};