import { Button } from 'react-bootstrap';
import './App.css';

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
            </div>
        </div>
    );
}
