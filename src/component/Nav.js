import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav id="nav-links">  
            <Link to="/"><button id="nav-home">Home</button></Link>
            <Link to="/View"><button id="nav-view">View</button></Link>
            <Link to="/Form"><button id="nav-form">Form</button></Link>
        </nav>
    );
}

export default Nav;