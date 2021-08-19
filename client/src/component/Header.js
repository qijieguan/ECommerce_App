import { ImLeaf } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';


export default function Header() {
    return (
        <div className="App-Header">
            <div style={{display: 'flex', alignItems: 'center'}}>
                <ImLeaf
                    size={24}
                    color="limegreen"
                    style={IconStyle}
                />
                <div className="Search-Bar">
                    <input className="Search-Input"
                        placeholder="Search product here..."
                    />
                    <div className="Search-Btn">
                        <BsSearch
                            size={20}
                            color="white"
                        />
                    </div>
                </div>
            </div>
            <div className="App-Logo">   
                Shopping App
            </div>
            <div className="App-Menu">
                <div className="Profile-Icon">
                    <CgProfile
                        size={24}
                        color="white"
                    />
                    <div className="Profile-Li">
                        <div className="Account-Info">My Account</div> 
                        <div className="Sign-Out">Sign Out</div>
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
