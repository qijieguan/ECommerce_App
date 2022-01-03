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
            el.style.backgroundColor = "white";
            el.style.color = "black";
        });
    }

    const handleClick = event => {
        event.preventDefault();
        resetActive();

        document.getElementById(event.target.id).style.color = "white";
        document.getElementById(event.target.id).style.backgroundColor = "rgb(255, 174, 24)";

        if (event.target.id !== "all") {
            let result = items.filter(item => event.target.id === item.Category);
            setList(result);
        }
        else {
            setList(items);
        }
        setStatus("Filter");
        setUpdate(!update);
        dispatch(setSearch(""));
    }

    return (
        <div className="View-Page">
            <div className="Filter-Panel">
                <div className="Filter-Li" id="all" onClick={handleClick}>all</div>
                <div className="Filter-Li" id="cloth" onClick={handleClick}>cloth</div>
                <div className="Filter-Li" id="electronic" onClick={handleClick}>electronic</div>
                <div className="Filter-Li" id="furnature" onClick={handleClick}>furnature</div>
                <div className="Filter-Li" id="food" onClick={handleClick}>food</div>
            </div>
            <div style={customStyle}>View Items!</div>
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

const customStyle = {
    padding: '120px 0 50px 80px',
    fontSize: '65px',
    textShadow: '1px 1px midnightblue',
    color: 'orange',
    backgroundColor: 'midnightblue',
    borderBottom: '2px solid grey'
}