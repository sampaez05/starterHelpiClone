import React, { ReactElement, ReactNode } from 'react';
import './App.css';
import { useState } from 'react';
import { Button, Container, FormGroup } from 'react-bootstrap';

export function ChatBot() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {message: "Hi, I am ChatBot!",
        sender: "ChatGPT"}, 
        {message: "I'm here to assist you. Do you have any questions for me?",
        sender: "ChatGPT"}
    ]);

    function updateInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    function sendUserMessage(message:string) {
        const newMessage = {message,sender:"User"}
        setMessages([...messages, newMessage]);
        setInput("");
    }

    return (
        <div>
            <Container className='chat-box'>
                <div className="chats">
                    {messages.map((message):ReactNode=> {
                        console.log(message)
                        return <div className={message.sender}>{message.message}</div>
                    })}
                </div>
                <FormGroup controlId="user-input">
                    <input className='userName' value={input} onChange={updateInput}></input>
                    <Button className="Buttons" onClick={(e)=>sendUserMessage(input)}>Enter</Button>
                </FormGroup>
            </Container>
        </div>
    );
}
