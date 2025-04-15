import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    question,
    selected,
    setSelected,
}: {
    options: string[];
    question:string;
    selected:string;
    setSelected: (answer:string)=> void;
}): React.JSX.Element {
    return (
        <div>
            <h3>{question}</h3>
            <Form.Group controlId="multipleChoiceQuestions">
                {options.map((option) => (
                    <label
                        key={option}
                    >
                        <input
                            type="radio"
                            name={question}
                            value={option}
                            checked={selected === option}
                            onChange={() => { setSelected(option)
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