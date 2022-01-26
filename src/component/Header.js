import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from './actions/index.js';
import Menu from './Menu.js';
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
        <header style={{overflowX: 'unset'}}>
            <div className="App-Logo">Shopping App</div>
            <div className="App-Search">
                <div className="Search" style={{display: 'flex', height: '60px', width: '500px'}}>
                    <input className="Search-Bar" style={{boxShadow: '0 0 5px'}}
                        placeholder="Search item here..."
                        value={word}
                        onChange={handleChange}
                    />
                    <button className="Search-Btn" onClick={handleSubmit}>
                        <Link to="/View"><AiOutlineSearch style={{display: 'flex'}} size={25} color='white'/></Link>
                    </button>
                </div>
                <Menu/>
            </div>
        </header>
    );
}
