import { Button } from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router-dom';

export interface PopupProp {
    closePopup:()=> void; //this function allows user to close the popup screen
}

export function FormSubmittedPopup ({closePopup}:PopupProp) {
    //closePopup is a function that is passed into the FormSubmittedPopup component which sets openPopup state to false
    return (
        <div className="popup">
            <Button className="popup-button" onClick={()=>closePopup()}>X</Button>
            <div>
                Form Submitted
                <br></br>
                Processing Responses
                <br></br>
                Curating Results
                <div>
                <Link to="/Results"><Button className="Buttons">Results</Button></Link></div>
            </div>
        </div>
    );
}
