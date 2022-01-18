import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from './actions/index.js';
import Item from './Item.js';

export default function View() {

    const dispatch = useDispatch();
    const items = useSelector(state => state.itemList);
    const word = useSelector(state => state.word);

    const [onLoad, setLoad] = useState(true);
    const [prevWord, setPrevWord] = useState("");
    const [status, setStatus] = useState("");
    const [update, setUpdate] = useState(false);
    const [list, setList] = useState(items);

    useEffect(() => {
        if (onLoad) {
            const Filter = document.querySelector(".Filter-Panel");
            Filter.classList.toggle("transformY");
            setLoad(false);
        }
        if (!word || status === "Filter") {setStatus("Done"); return;}   
        setPrevWord(word);
        resetActive();
        setList(items.filter(item => item.Name === word));
     
    }, [onLoad, update, status, prevWord, word, items]);

    const resetActive = () => {
        let list = document.querySelectorAll(".Filter-Li");
        
        list.forEach(el => {
            el.style.background = "white";
            el.style.color = "black";
        });
    }

    const handleClick = event => {
        event.preventDefault();
        resetActive();

        document.getElementById(event.target.id).style.color = "white";
        document.getElementById(event.target.id).style.background = "rgb(255, 174, 24)";

        if (event.target.id !== "All") {
            let result = items.filter(item => event.target.id === item.Category);
            setList(result);
        }
        else {setList(items);}
        setStatus("Filter");
        setUpdate(!update);
        dispatch(setSearch(""));
    }

    return (
        <div className="View-Page">
            <div className="Filter-Panel">
                <div className="Filter-Li" id="All" onClick={handleClick}>All</div>
                <div className="Filter-Li" id="Cloth" onClick={handleClick}>Cloth</div>
                <div className="Filter-Li" id="Electronic" onClick={handleClick}>Electronic</div>
                <div className="Filter-Li" id="Furnature" onClick={handleClick}>Furnature</div>
                <div className="Filter-Li" id="Food" onClick={handleClick}>Food</div>
            </div>
            <div className="Items-Display">
                {list.length ?
                    list.map(item => <Item key={item.id} item={item} />)
                    :
                    <div className="View-Default">No Items to Display</div>
                }
            </div>
        </div>
    );
}
