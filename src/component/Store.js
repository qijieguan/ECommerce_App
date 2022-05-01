import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from './actions/index.js';
import Item from './Item.js';
import Cart from './Cart.js';
//import uuid from 'react-uuid';

export default function Store() {

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
        <div className="store">
            <div className='overlay'/>
            <Cart/>
            <div className="items-display">
                <div className="filter">
                    <div className="filter-btn" id="All" onClick={handleClick}>All
                        <div className='filter-overlay'/>
                    </div>
                    <div className='filter-btn' id= "Beauty" onClick={handleClick}>Beauty
                        <div className='filter-overlay'/>
                    </div>
                    <div className="filter-btn" id="Cleaning" onClick={handleClick}>Cleaning
                        <div className='filter-overlay'/>
                    </div>
                    <div className="filter-btn" id="Clothes" onClick={handleClick}>Clothes
                        <div className='filter-overlay'/>
                    </div>
                    <div className="filter-btn" id="Electronic" onClick={handleClick}>Electronic
                        <div className='filter-overlay'/>
                    </div>
                    <div className="filter-btn" id="Furniture" onClick={handleClick}>Furniture
                        <div className='filter-overlay'/>
                    </div>
                    <div className="filter-btn" id="Food" onClick={handleClick}>Food
                        <div className='filter-overlay'/>
                    </div>
                    <div className='filter-btn' id="Drinks" onClick={handleClick}>Drinks
                        <div className='filter-overlay'/>
                    </div>
                    <div className='filter-btn' id="Toy" onClick={handleClick}>Toy
                        <div className='filter-overlay'/>
                    </div>
                </div>
                <h1 className='store-label'>Browse Store</h1>
                {list && list.length  ?
                    <div className='item-listing grid'>
                        {list.map(item => <Item key={item.id} item={item} />)}
                    </div>
                    :
                    <div className="store-default flex">No Items to Display</div>
                }
            </div>
        </div>
    );
}

