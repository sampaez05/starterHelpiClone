import React, { ReactElement, ReactNode } from 'react';
import './App.css';
import { useState } from 'react';
import { Button, Container, FormGroup } from 'react-bootstrap';

type Message = {
    message: string;
    sender: "ChatGPT" | "User";
};

export function ChatBot() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {message: "Hi, I am ChatBot!",
        sender: "ChatGPT"}, 
        {message: "I'm here to assist you. Do you have any questions for me?",
        sender: "ChatGPT"}
    ]); //messages contain a message that will display on the screen and a sender

    function updateInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    async function sendUserMessage(message:string) {
        //The purpose of this function is to send the user's message and make it display on the screen
        const newMessage:Message = {message, sender:"User"} //makes a message and sets the message's sender to User
        setMessages([...messages, newMessage]); //adds the user's message to the array of messages so that it can be displayed
        setInput(""); //clears the input box after user sends their messages

        await chatGptResponse(messages);
    }

    async function chatGptResponse(messages:Message[]){
        const apiMessages = messages.map((message)=> {
            const role = message.sender === "ChatGPT" ? "assistant" : "user";
            return {role, content: message.message}
        });
    }

    return (
        <div>
            <Container className='chat-box'>
                <div className="chats">
                    {/** the bottom function displays all the messages in the messages array on the screen
                     * the sender of each message will determine the alignment of the message and its color
                     */}
                    {messages.map((message):ReactNode=> {
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
