import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from './actions/index.js';
import Nav from './Nav.js';
import { useHistory } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {

    const [word, setWord] = useState("");
    const dispatch = useDispatch();

    const form = document.getElementById('search');
    const search = document.getElementById('search-bar');
    const history = useHistory();

    const handleChange = event => { setWord(event.target.value); }
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!search.value) { return; }
            dispatch(setSearch(search.value));   
            history.push("/View");
        });   
    }

    return (
        <header id='header'>
            <div id="logo">Shopping App</div>
            <form id="search">
                <input id="search-bar" placeholder="Search item here" value={word} onChange={handleChange}/> 
                <button id="search-btn" type="submit">
                    <AiOutlineSearch style={{display: 'flex'}} size={25} color='black'/>
                </button>  
            </form>
            <Nav/>
        </header>
    );
}
