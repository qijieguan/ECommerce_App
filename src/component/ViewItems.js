import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from './actions/index.js';
import Item from './Item.js';
import Cart from './Cart.js';


export default function View() {

    const dispatch = useDispatch();
    const items = useSelector(state => state.itemList);
    const word = useSelector(state => state.word);
    const cart = useSelector(state => state.cart);

    const [prevWord, setPrevWord] = useState("");
    const [status, setStatus] = useState("");
    const [update, setUpdate] = useState(false);
    const [list, setList] = useState(items);

    useEffect(() => {
        document.getElementById('header').style.background = 'black';

        if (!word || status === "Filter") { setStatus("Done"); return; }   
        setPrevWord(word);
        resetActive();
        setList(items.filter(item => item.Name === word));
    }, [ update, status, prevWord, word, items, cart]);

    const resetActive = () => {
        let list = document.querySelectorAll(".filter-li");
        list.forEach(el => { el.style.background = "white"; el.style.color = "black"; });
    }

    const handleClick = event => {
        event.preventDefault();
        resetActive();

        document.getElementById(event.target.id).style.color = "white";
        document.getElementById(event.target.id).style.background = "rgb(255, 174, 24)";

        if (event.target.id !== "All") {
            let result = items.filter(item => event.target.id === item.Tag);
            setList(result);
        }
        else { setList(items); }
        setStatus("Filter");
        setUpdate(!update);
        dispatch(setSearch(""));
    }

    return (
        <div id="view-page">
            <Cart/>
            <div id="items-display">
                <div id="filter-interface">
                    <div className="filter-li" id="All" onClick={handleClick}>All</div>
                    <div className='filter-li' id= "Beauty" onClick={handleClick}>Beauty</div>
                    <div className="filter-li" id="Cleaning" onClick={handleClick}>Cleaning</div>
                    <div className="filter-li" id="Clothes" onClick={handleClick}>Clothes</div>
                    <div className="filter-li" id="Electronic" onClick={handleClick}>Electronic</div>
                    <div className="filter-li" id="Furnature" onClick={handleClick}>Furnature</div>
                    <div className="filter-li" id="Food" onClick={handleClick}>Food</div>
                    <div className='filter-li' id="Drinks" onClick={handleClick}>Drinks</div>
                    <div className='filter-li' id="Toy" onClick={handleClick}>Toy</div>
                </div>
                {list.length ?
                    list.map(item => <Item key={item.id} item={item} />)
                    :
                    <div id="view-default">No Items to Display</div>
                }
            </div>
        </div>
    );
}
