
import { Form } from "react-bootstrap";
import './App.css';

export function MultipleChoiceQuestion({
    options,
    question,
    selected,
    setSelected,//all the data sent in
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
                {options.map((option) => (//runs through information and makes the question
                    <label
                        className="options"
                        key={option}//which object is it
                    >
                        <input
                            type="radio"
                            name={question}
                            value={option}
                            checked={selected === option}
                            onChange={() => { setSelected(option)
                            }}
                            style={{ marginRight: "5px" }}//just small visual
                        />
                        {option}
                    </label>
                ))}
            </Form.Group>
        </div>
    );
}