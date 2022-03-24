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

    const [status, setStatus] = useState("");
    const [update, setUpdate] = useState(false);
    const [list, setList] = useState(items);
    const [onLoad, setLoad] = useState(true);
    
    useEffect(() => {
        if (onLoad) { document.querySelector("#All").classList.add('toggleColor'); setLoad(false); }
        if (!word || !word.length || status === "Filter") { setStatus("Done"); return; }  

        resetActive();
        setList(items.filter(item => item.Name.toLowerCase().includes(word.toLowerCase())));
        dispatch(setSearch(""));  
    }, [dispatch, onLoad, word, update, status, items, cart]);

    const resetActive = () => {
        let list = document.querySelectorAll(".filter-li");
        list.forEach(el => { el.classList.remove('toggleColor'); });
    }

    const handleClick = e => {
        e.preventDefault();
        resetActive();
        document.querySelector('#' + e.target.id).classList.add('toggleColor');

        if (e.target.id !== "All") {
            let result = items.filter(item => e.target.id === item.Tag);
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
                    <div className="filter-li" id="Furniture" onClick={handleClick}>Furniture</div>
                    <div className="filter-li" id="Food" onClick={handleClick}>Food</div>
                    <div className='filter-li' id="Drinks" onClick={handleClick}>Drinks</div>
                    <div className='filter-li' id="Toy" onClick={handleClick}>Toy</div>
                </div>
                {list && list.length  ?
                    list.map(item => <Item key={item.id} item={item} />)
                    :
                    <div id="view-default">No Items to Display</div>
                }
            </div>
        </div>
    );
}
