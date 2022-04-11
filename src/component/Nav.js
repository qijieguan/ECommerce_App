import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav className="nav-links">  
            <Link to='/'><button id="/" className='nav-link'>Home</button></Link>
            <Link to='/Store'><button id="/Store" className='nav-link'>Store</button></Link>
            <Link to='/Form'><button id="/Form" className='nav-link'>Form</button></Link>
        </nav>
    );
}

export default Nav;