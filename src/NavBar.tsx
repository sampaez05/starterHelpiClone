import './App.css';
import {  NavLink} from 'react-router-dom';
import logo from './Terryturtle.png';
export const NavBar = () => {
    return (
        <nav className='nav'>
                <ul>
                    <img src= {logo}  width = '100px' height = '100px'/>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/BasicQuestions">Basic Questions</NavLink></li>
                    <li><NavLink to="/DetailedQuestions">Detailed Questions</NavLink></li>
                </ul>
        </nav>
    );
}