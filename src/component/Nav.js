import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav className="nav-links">  
            <Link to='/'><button id="/" className='nav-link'>Home</button></Link>
            <Link to='/View'><button id="/View" className='nav-link'>Shop</button></Link>
            <Link to='/Form'><button id="/Form" className='nav-link'>Form</button></Link>
        </nav>
    );
}

export default Nav;