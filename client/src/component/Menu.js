import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <div className="App-Menu">
            <nav className="Menu-Nav">
                <div className="Menu-UL" 
                >
                    <AiOutlineMenuUnfold
                        size={30}
                        color="white"
                        style={{padding: "15px 25px"}}
                    />
                    <div className="Menu-Li">
                        <Link className="Home" to="/">Home</Link>
                        <Link className="View-Items" to="/View">View Items</Link>
                        <Link className="Item-Form" to="/Form">Item Form</Link>
                        <Link className="Sign-Out" to="/">Sign Out </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Menu;