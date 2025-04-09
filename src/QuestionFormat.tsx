import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
    question
}: {
    options: string[];
    expectedAnswer: string;
    question:string;
    selected:string;
}): React.JSX.Element {
    const [Answer, setAnswer] = useState<string>(options[0]);

    return (
        <div>
            <h3>{question}</h3>
            <Form.Group controlId="userEmotions">
                {/* <Form.Label>{question}</Form.Label> */}
                {options.map((option) => (
                    <label
                        key={option}
                    >
                        <input
                            type="radio"
                            name={question}
                            value={option}
                            checked={Answer === option}
                            onChange={() => {
                                setAnswer(option);
                            }}
                            style={{ marginRight: "5px" }}
                        />
                        {option}
                    </label>
                ))}
            </Form.Group>
            <div>{Answer === expectedAnswer ? "✔️" : "❌"}.</div>
        </div>
    );
}