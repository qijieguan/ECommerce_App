import './styles/nav.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from './actions/index.js';
import Nav from './Nav.js';
import { useHistory, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import uuid from "react-uuid";

export default function Header() {

    const items = useSelector(state => state.itemList);

    const [dropdown, setDropDown] = useState([]);
    const [word, setWord] = useState("");
    const dispatch = useDispatch();
    
    const history = useHistory();
    const location = useLocation();

    useEffect(() => { 
        activeObserver(); 
        toggleLinks(location);
        toggleSearchBar(location);
    }, [history, location]);

    const toggleLinks = (location) => {
        let pathname = "/" + location.pathname.split('/')[1];
        if (pathname === '/About') { pathname = '/' }
        if (pathname === '/Checkout') { pathname = '/View' }
        let elements = document.querySelectorAll('.nav-link');
        elements.forEach(el => el.classList.remove('active'))
        let element = document.getElementById(pathname);
        if (element) { element.classList.add('active'); };
    }

    const toggleSearchBar = (location) => {
        let pathname = "/" + location.pathname.split('/')[1];
        if (pathname === '/' || pathname === '/Form') {  
            document.getElementById("header").style.background = 'transparent';
            document.getElementById("search-bar").style.display = 'none';
            document.getElementById("search-btn").style.display = 'none';
        }
        else {
            document.getElementById('header').style.background = 'teal';   
            document.getElementById("search-bar").style.display = 'inline-flex';
            document.getElementById("search-btn").style.display = 'inline-flex';
        }
    }

    const activeObserver = () => {
        const faders = document.querySelectorAll('.fade-slide');
        const sliders = document.querySelectorAll('.slide-side');
        const appearOptions = { threshold: 0, rootMargin: '0px 0px -200px 0px' }; 

        const appearOnScroll = new IntersectionObserver (
            function( entries ) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) { entry.target.classList.remove('appear'); }
                    else { entry.target.classList.add('appear'); }
                });
            },
        appearOptions);  

        faders.forEach(fader => { appearOnScroll.observe(fader); });
        sliders.forEach(slider => { appearOnScroll.observe(slider); });
    }

    const handleChange = e => { 
        let result = [];
        if (e.target.value) {
            items.forEach(item => {
                let parseName = item.Name.split(' ');
                for (let i = 0; i < parseName.length; ++i) {
                    if (parseName[i].toLowerCase().substr(0, e.target.value.length) === (e.target.value.toLowerCase())) {
                        result.push(item.Name); break;
                    } 
                };
            });
            let search = document.querySelector('#search-bar');
            if (result.length) { search.classList.add('removeBottom'); }
            else { search.classList.remove('removeBottom'); }
        }
        else { document.querySelector('#search-bar').classList.remove('removeBottom'); }
        setDropDown(result);
        setWord(e.target.value); 
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!word) { return; }
        if (e.target.textContent) { dispatch(setSearch(e.target.textContent)); }
        else { dispatch(setSearch(word)); } 
        history.push("/View");
        setDropDown([]);
        setWord("");
        document.querySelector('#search-bar').classList.remove('removeBottom');
    }

    return (
        <header id='header'>
            <div id="logo">Shopping App</div>
            <form id="search" onSubmit={handleSubmit}>
                <input 
                    id="search-bar" 
                    placeholder="Search item here" 
                    value={word} 
                    onChange={handleChange}
                    style={{borderBottomWidth: '2px'}}
                /> 
                <button id="search-btn" type="submit">
                    <AiOutlineSearch style={{display: 'flex'}} size={25} color='grey'/>
                </button> 
                {dropdown && dropdown.length ?
                    <div id="dropdown-ul">
                        {dropdown.map(name => 
                            <div className='dropdown-li' key={uuid()} onClick={handleSubmit}>{name}</div>
                        )}
                    </div>
                    :''
                } 
            </form>
            <Nav/>
        </header>
    );
}
