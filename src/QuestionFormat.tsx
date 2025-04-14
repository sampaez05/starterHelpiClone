import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    question
}: {
    options: string[];
    question:string;
    selected:string;
}): React.JSX.Element {
    const [Answer, setAnswer] = useState<string>('');
    const [responded, setResponse] = useState<boolean>(false);

    return (
        <div>
            <h3>{question}</h3>
            <Form.Group controlId="multipleChoiceQuestions">
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
                                setResponse(true);
                            }}
                            style={{ marginRight: "5px" }}
                        />
                        {option}
                    </label>
                ))}
            </Form.Group>
        </div>
    );
}