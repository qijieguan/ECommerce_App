import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Menu = () => {

    const MenuHover = () => {
        const nav = document.querySelector(".Menu-Li");
        nav.classList.toggle("Menu-Active");
    }

    return (
        <div className="App-Menu">
            <div className="Menu-Icon">
                <div className="Menu-UL" onClick={MenuHover}>
                    <AiOutlineMenuUnfold
                        size={30}
                        color="white"
                    />
                </div>
                <div className="Menu-Li">
                    <Link className="Home" to="/">Home</Link>
                    <Link className="Item-Form" to="/Form">Item Form</Link>
                    <Link className="View-Items" to="/View">View Items</Link>
                    <Link className="Sign-Out" to="/">Sign Out </Link>
                </div>
            </div>
        </div>
    );
}

export default Menu;