import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from './actions/index.js';
import Nav from './Nav.js';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {

    const [word, setWord] = useState("");
    const dispatch = useDispatch();

    const handleChange = event => {setWord(event.target.value);}

    const handleSubmit = event => {
        event.preventDefault();

        if (!word) {return}
        dispatch(setSearch(word));
        setWord("");
    }

    return (
        <header id='header'>
            <div id="logo">Shopping App</div>
            <div id="search">
                <input id="search-bar" 
                    placeholder="Search item here"
                    value={word}
                    onChange={handleChange}
                />
                <button id="search-btn" onClick={handleSubmit}>
                    <Link to="/View"><AiOutlineSearch style={{display: 'flex'}} size={25} color='black'/></Link>
                </button>
            </div>
            <Nav/>
        </header>
    );
}
