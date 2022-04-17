import './styles/nav.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from './actions/index.js';
import Nav from './Nav.js';
import { useHistory, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import uuid from "react-uuid";

export default function Header() {

    const [dropdown, setDropDown] = useState([]);
    const [word, setWord] = useState("");
    
    const dispatch = useDispatch();
    const items = useSelector(state => state.itemList);
    
    const history = useHistory();
    const location = useLocation();

    useEffect(() => { 
        activeObserver(); 
        toggleLinks(location);
        toggleSearchBar(location);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [history, location, dispatch]);

    const toggleLinks = (location) => {
        let pathname = "/" + location.pathname.split('/')[1];
        if (pathname === '/About') { pathname = '/' }
        if (pathname === '/Checkout') { pathname = '/Store' }
        let elements = document.querySelectorAll('.nav-link');
        elements.forEach(el => el.classList.remove('active'))
        let element = document.getElementById(pathname);
        if (element) { element.classList.add('active'); };
    }

    const toggleSearchBar = (location) => {
        let pathname = "/" + location.pathname.split('/')[1];
        if (pathname === '/' || pathname === '/Form' || pathname === "/About") {  
            document.querySelector(".header").style.background = 'transparent';
            document.querySelector(".search-bar").style.display = 'none';
            document.querySelector(".search-btn").style.display = 'none';
            setWord('');
            setDropDown('');
        }
        else {
            document.querySelector(".header").style.background = 'black';   
            document.querySelector(".search-bar").style.display = 'flex';
            document.querySelector(".search-btn").style.display = 'flex';
        }
    }

    const activeObserver = () => {
        const faders = document.querySelectorAll('.fade-slide');
        //const sliders = document.querySelectorAll('.from-left');
        const appearOptions = { threshold: 0, rootMargin: '0px 0px 0px 0px' }; 

        const appearOnScroll = new IntersectionObserver (
            function( entries ) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) { entry.target.classList.add('appear'); }
                });
            },
        appearOptions);  

        faders.forEach(fader => { appearOnScroll.observe(fader); });
        //sliders.forEach(slider => { appearOnScroll.observe(slider); });
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
            document.querySelector(".overlay").style.display = 'unset';
        }
        else { document.querySelector(".overlay").style.display = 'none'; }
        setDropDown(result);
        setWord(e.target.value); 
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!word) { return; }
        if (e.target.textContent) { dispatch(setSearch(e.target.textContent)); }
        else { dispatch(setSearch(word)); } 
        history.push("/Store");
        setDropDown([]); 
        setWord("");
        document.querySelector(".overlay").style.display = 'none'; 
    }
    
    const exitSearch = document.querySelector('.overlay');

    if (exitSearch) {
        exitSearch.addEventListener("click", () => {
            exitSearch.style.display = 'none';
            setDropDown([]);
        });
    }

    return (
        <header className='header flex'>
            <div className="logo flex">Shopping App</div>
            <form className="search flex" onSubmit={handleSubmit}>
                <input 
                    className="search-bar" 
                    placeholder="Search item here" 
                    value={word} 
                    onChange={handleChange}
                    style={{borderBottomWidth: '2px'}}
                /> 
                <button className="search-btn" type="submit"><AiOutlineSearch/></button> 
                {dropdown && dropdown.length ?
                    <div className="dropdown-ul flex">
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
