import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <div className="App-Menu">
            <nav className="Menu-UL">
                <AiOutlineMenuUnfold className='Menu-Icon' size={30}/>
                <div className="Menu-Li">
                    <Link className="Home" to="/">Home</Link>
                    <Link className="View-Items" to="/View">View Items</Link>
                    <Link className="Item-Form" to="/Form">Item Form</Link>
                </div>
            </nav>
        </div>
    );
}

export default Menu;