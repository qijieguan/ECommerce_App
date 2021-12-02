import { ImLeaf } from 'react-icons/im';
import Menu from './Menu.js';

export default function Header() {
    return (
        <div className="App-Header">
            <div className="App-Logo">   
                Shopping App
                <ImLeaf
                    size={24}
                    color="limegreen"
                    style={IconStyle}
                />
            </div>
            <div className="App-Nav">
                <div className="Search">
                    <input
                        className="Search-Bar"
                        placeholder="Search item here..."
                    />
                    <button className="Search-Btn">Find</button>
                </div>
                <Menu/>
            </div>
        </div>
    );
}

const IconStyle = {
    margin: '0 20px',
    cursor: 'pointer'
}
