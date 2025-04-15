
import './App.css';
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <header>Home Page
            </header>
            <div>
                <Link to="/BasicQuestions"><Button className="Buttons">Basic Questions</Button></Link>
                <br></br>
                <Link to="/DetailedQuestions"><Button className="Buttons">Detailed Questions</Button></Link>
            </div>
        </div>
    );
}
export default Home;