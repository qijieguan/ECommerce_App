import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { ImClipboard } from 'react-icons/im';

const Nav = () => {

    return (
        <nav className="nav-links flex">  
            <Link to='/'>
                <button id="/" className='nav-link flex'>
                    <span>Home</span>
                    <AiFillHome className="nav-icon"/></button>
            </Link>
            <Link to='/Store'>
                <button id="/Store" className='nav-link flex'>
                    <span>Store</span>
                    <FaShoppingCart className="nav-icon"/>
                </button>
            </Link>
            <Link to='/Form'>
                <button id="/Form" className='nav-link flex'>
                    <span>Form</span>
                    <ImClipboard className="nav-icon"/>
                </button>
            </Link>
        </nav>
    );
}

export default Nav;