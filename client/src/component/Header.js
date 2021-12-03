import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from './actions/index.js';
import { ImLeaf } from 'react-icons/im';
import Menu from './Menu.js';

export default function Header() {

    const [word, setWord] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {

    }, [])

    const handleChange = event => {
        event.preventDefault();
        setWord(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (word) {
            dispatch(setSearch(word));
            setWord("");
        }
    }

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
                        value={word}
                        onChange={handleChange}
                    />
                    <button className="Search-Btn" onClick={handleSubmit}>Find</button>
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
