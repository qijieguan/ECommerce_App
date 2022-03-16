import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nav = () => {

    const location = useLocation();

    return (
        <nav id="nav-links">  
            <Link to={{pathname: "/", state: {prev: location.pathname}}}><button id="/" className='nav-link'>Home</button></Link>
            <Link to={{pathname: "/View", state: {prev: location.pathname}}}><button id="/View" className='/nav-link'>Shop</button></Link>
            <Link to={{pathname: "/Form", state: {prev: location.pathname}}}><button id="/Form" className='/nav-link'>Form</button></Link>
        </nav>
    );
}

export default Nav;