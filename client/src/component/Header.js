import { ImLeaf } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="App-Header">
            <div/>
            <div className="App-Logo">   
                Shopping App
                <ImLeaf
                    size={24}
                    color="limegreen"
                    style={IconStyle}
                />
            </div>
            <div className="App-Menu">
                <div className="Profile-Icon">
                    <CgProfile
                        size={24}
                        color="white"
                    />
                    <div className="Profile-Li">
                        <Link to="/">
                            <div className="Account-Info">My Account</div> 
                        </Link>
                        <Link to="/Form">
                            <div className="Item-Post">Post Item</div>
                        </Link>
                        <Link to="/">
                            <div className="Sign-Out">Sign-Out</div> 
                        </Link>
                    </div>
                </div>
                <div className="Cart-Icon">
                    <AiOutlineShoppingCart
                        size={32}
                        color="white"
                    />
                </div>
            </div>
        </div>
    );
}

const IconStyle = {
    margin: '0 15px',
    cursor: 'pointer'
}
