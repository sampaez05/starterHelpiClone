import './App.css';
import {  NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className='nav'>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/BasicQuestions">Basic Questions</NavLink></li>
                    <li><NavLink to="/DetailedQuestions">Detailed Questions</NavLink></li>
                </ul>
        </nav>
    );
}