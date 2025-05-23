// I used https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/ for reference on how the router stuff works

import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom'
import  Home  from "./Home";
import { BasicQuestions } from './BasicQuestions';
import { DetailedQuestions } from './DetailedQuestions';
import { NavBar } from './NavBar';
import { Results } from './Results';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        Teenage Mutant Career Options
        <NavBar/>
      </header>
      <div className="Body">
      <Routes>
          <Route path="/" element={<Home />}/> 
          {
            /*Using path="/" sets the default path to the Home page*/
          }
          <Route path="/BasicQuestions" element={<BasicQuestions />} />
          <Route path="/DetailedQuestions" element={<DetailedQuestions />} />
          <Route path="/Results" element={<Results />} />
        </Routes>
      </div>
      <footer>
        <p>Team Members: Samantha Paez, Jackson Singley, Nolan Keefe, and Diego Quijada</p>
        <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
      </footer>
  </div>
);
}

export default App;
