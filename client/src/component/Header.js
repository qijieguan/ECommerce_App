import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from './actions/index.js';
import Menu from './Menu.js';

export default function Header() {

    const [word, setWord] = useState("");
    const dispatch = useDispatch();

    const handleChange = event => {
        event.preventDefault();
        
        setWord(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!word) {return}
        dispatch(setSearch(word));
        setWord("");
    }

    return (
        <div className="App-Header">
            <div className="App-Logo">   
                Shopping App
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
