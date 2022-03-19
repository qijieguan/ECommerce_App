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
        //toggle color for active link
        if (location.state && location.state.prev) {  
            let prevPath = '/'+ location.state.prev.split('/')[1];
            
            if (prevPath !== '/' && prevPath !== '/View' && prevPath !== '/Form') { 
                if (prevPath === '/About') { prevPath = '/' }
                if (prevPath === '/Checkout') { prevPath = '/View' }
            }
            document.getElementById(prevPath).style.color = 'white'; 
            document.getElementById(prevPath).style.borderBottom = '0';
        }
            
        let element = document.getElementById(location.pathname);
        if (element) { 
            element.style.color = 'aquamarine'; 
            element.style.pointerEvents = 'none';
            element.style.borderBottom = '2px solid aquamarine';
        };
    }, [history, location]);

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


    const handleChange = event => { 
        let result = [];
        if (event.target.value) {
            items.forEach(item => {
                if (item.Name.toLowerCase().includes(event.target.value.toLowerCase())) {
                    result.push(item.Name);
                }
            });
            let search = document.getElementById('search-bar');
            if (result.length) { search.style.borderBottom = 'none'; }
            else { search.style.borderBottom = '2px solid orange'; }
        }
        else { document.getElementById('search-bar').style.border = '2px solid orange'; }
        setDropDown(result);
        setWord(event.target.value); 
    }

    const highlight = () => {
        let search = document.getElementById('search-bar');
        search.style.border = '2px solid orange'; 
        search.style.outline = 'none';
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!word) { return; }
        if (e.target.innerText) { 
            dispatch(setSearch(e.target.innerText)); 
            document.getElementById('search-bar').style.border = '1px solid rgb(196,196,196)'; 
        }
        else { dispatch(setSearch(word)); }   
        history.push("/View");
        setDropDown([]);
        setWord("")
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
                    onFocus={() => highlight()}
                /> 
                <button id="search-btn" type="submit">
                    <AiOutlineSearch style={{display: 'flex'}} size={25} color='black'/>
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
