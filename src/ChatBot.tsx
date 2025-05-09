import React, { ReactNode } from 'react';
import './App.css';
import { useState } from 'react';
import { Button, Container, FormGroup } from 'react-bootstrap';
import { chatSend } from './AI-code';

type Message = {
    message: string;
    sender: "ChatGPT" | "User";
};

export function ChatBot() {
    const [input, setInput] = useState('');
    
    const [messages, setMessages] = useState<Message[]>([
        {message:"Hi there! Welcome to CareerHelpi!", sender:"ChatGPT"}
    ]); //messages is a list contains a series of messages that will display on the screen and a sender

    function updateInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    async function sendUserMessage(message:string) {
        //add the user's message to the array of messages so that it can be displayed
        const userMessage:Message = {message:message, sender:"User"} //makes a message and sets the message's sender to User
        const newMessages:Message[] = [...messages, userMessage];
        setMessages(newMessages);
        setInput(""); //clears the input box after user sends their messages
        setMessages([...newMessages,{message:"ChatGPT is typing...", sender:"ChatGPT"}]); //displays while ChatGPT is loading a response

        //send the messages to chatGPT to be read and responded to 
        let chatMessage = "This user of this career quiz website wants to chat with you. The messages are presented in order. Respond to the user based on the following messages: ";
        for(let i = 0;i<newMessages.length;i++){
            chatMessage += "\nmessage: " + newMessages[i].message + "\nsender: " + newMessages[i].sender;
        }

        //receive and display ChatGPT's response messages
        const gptResponse = await chatSend(chatMessage); // provide actual message if needed
        if (gptResponse) {
            //remove the "ChatGPT is typing..." message since the response is ready
            messages.pop();
            setMessages([...messages]);
            //add ChatGPT's response to the message array so it can be displayed
            const aiMessage:Message = {message:gptResponse, sender:"ChatGPT"} //makes a message and sets the message's sender to ChatGPT
            setMessages([...newMessages, aiMessage]); //adds the user's message to the array of messages so that it can be displayed
        } else {
            //remove the "ChatGPT is typing..." message since the response is ready
            messages.pop();
            setMessages([...messages]);
            //adds an error message to the array of messages to be displayed
            setMessages([...newMessages, {message:"Something went wrong. Try again later.", sender:"ChatGPT"}]);
        }
      };

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
                    <Button className="Buttons" onClick={async (e)=>{e.preventDefault(); await sendUserMessage(input)}}>Enter</Button>
                </FormGroup>
            </Container>
        </div>
    );
}
