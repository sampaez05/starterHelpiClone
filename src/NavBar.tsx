import { useState } from 'react';
import './App.css';
import { Button, ProgressBar } from 'react-bootstrap';
import { Link, NavLink, Route, HashRouter as Router, Routes } from 'react-router-dom';
import { BasicQuestions } from './BasicQuestions';
import { DetailedQuestions } from './DetailedQuestions';
import Home from './Home';

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