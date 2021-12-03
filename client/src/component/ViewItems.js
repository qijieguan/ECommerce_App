import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from './actions/index.js';
import Item from './Item.js';

export default function View() {

    const dispatch = useDispatch();
    const items = useSelector(state => state.itemList);
    const word = useSelector(state => state.word);

    const [prevWord, setPrevWord] = useState("");
    const [status, setStatus] = useState("");
    const [update, setUpdate] = useState(false);
    const [list, setList] = useState(items);

    useEffect(() => {
        if (word && status !== "Filter") {
            setPrevWord(word);
            resetActive();
            setList(items.filter(item => item.Name === word));
            return;
        }   
        setStatus("Done");
    }, [update, status, prevWord, word, items]);

    const resetActive = () => {
        let list = document.getElementsByClassName("Filter-Li");
        
        for (let i = 0; i < list.length; ++i) {
            list[i].style.backgroundColor = "white";
            list[i].style.color = "black";
        }
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
    padding: '90px 0 70px 80px',
    fontSize: '70px',
    fontFamily: '"Times New Roman", Times, serif',
    textShadow: '1px 1px limegreen',
    color: 'lime',
    backgroundColor: 'rgb(235, 235, 235)',
}