import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from './actions/index.js';
import Item from './Item.js';
import Cart from './Cart.js';
//import uuid from 'react-uuid';

export default function View() {

    //const tagName = ["All", "Beauty", "Cleaning", "Clothes", "Electronic", "Furniture", "Food", "Drinks", "Toy"];
    const dispatch = useDispatch();
    const items = useSelector(state => state.itemList);
    const word = useSelector(state => state.word);
    const cart = useSelector(state => state.cart);

    const [status, setStatus] = useState("");
    const [update, setUpdate] = useState(false);
    const [list, setList] = useState(items);
    const [onLoad, setLoad] = useState(true);
    
    useEffect(() => {
        if (onLoad) { document.querySelector("#All").classList.add('toggleTag'); setLoad(false); }
        if (!word || !word.length || status === "onFilter") { setStatus("Done"); return; }  

        resetActive();
        setList(items.filter(item => item.Name.toLowerCase().includes(word.toLowerCase())));
        dispatch(setSearch(""));  
    }, [dispatch, onLoad, word, update, status, items, cart]);

    const resetActive = () => {
        let list = document.querySelectorAll(".filter-btn");
        list.forEach(el => { el.classList.remove('toggleTag'); });
    }

    const handleClick = e => {
        e.preventDefault();

        resetActive();
        document.querySelector('#' + e.currentTarget.id).classList.add('toggleTag');
        if (e.currentTarget.id !== "All") {
            let result = items.filter(item => e.currentTarget.id === item.Tag);
            setList(result);
        }
        else { setList(items); }
        setStatus("onFilter");
        setUpdate(!update);
        dispatch(setSearch(""));
    }

    return (
        <div id="view-page">
            <Cart/>
            <div id="items-display">
                <div id="filter">
                    <div className="filter-btn" id="All" onClick={handleClick}>
                        <span>All</span>
                        <div className='filter-overlay'/>
                    </div>
                    <div className='filter-btn' id= "Beauty" onClick={handleClick}>
                        <span>Beauty</span>
                        <div className='filter-overlay'/>
                    </div>
                    <div className="filter-btn" id="Cleaning" onClick={handleClick}>
                        <span>Cleaning</span>
                        <div className='filter-overlay'/>
                    </div>
                    <div className="filter-btn" id="Clothes" onClick={handleClick}>
                        <span>Clothes</span>
                        <div className='filter-overlay'/>
                    </div>
                    <div className="filter-btn" id="Electronic" onClick={handleClick}>
                        <span>Electronic</span>
                        <div className='filter-overlay'/>
                    </div>
                    <div className="filter-btn" id="Furniture" onClick={handleClick}>
                        <span>Furniture</span>
                        <div className='filter-overlay'/>
                    </div>
                    <div className="filter-btn" id="Food" onClick={handleClick}>
                        <div>Food</div>
                        <div className='filter-overlay'/>
                    </div>
                    <div className='filter-btn' id="Drinks" onClick={handleClick}>
                        <span>Drinks</span>
                        <div className='filter-overlay'/>
                    </div>
                    <div className='filter-btn' id="Toy" onClick={handleClick}>
                        <span>Toy</span>
                        <div className='filter-overlay'/>
                    </div>
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

