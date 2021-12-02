import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Item from './Item.js';

export default function View() {

    const items = useSelector(state => state.itemList);
    const [list, setList] = useState(items);

    useEffect(() => {
        
    }, [list]);

    const handleClick = event => {
        if (event.target.id !== "all") {
            let result = items.filter(item => event.target.id === item.Category);
            setList(result);
            return;
        }
        setList(items);
    }

    return (
        <div className="View-Page">
            <div className="Filter-Panel">
                <div id="all" onClick={handleClick}>all</div>
                <div id="cloth" onClick={handleClick}>cloth</div>
                <div id="electronic" onClick={handleClick}>electronic</div>
                <div id="furnature" onClick={handleClick}>furnature</div>
                <div id="food" onClick={handleClick}>food</div>
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