import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Item from './Item.js';

export default function View() {

    const items = useSelector(state => state.itemList)

    useEffect(() => {
        console.log(items);
    }, []);

    return (
        <div className="View-Page">
            <div style={customStyle}>View Items!</div>
            <div className="Items-Display">
                {items.length ?
                    items.map(item => <Item key={item.id} item={item} />)
                    :
                    <div className="View-Default">No Items to Display</div>
                }
            </div>
        </div>
    );
}

const customStyle = {
    padding: '100px 0 70px 80px',
    fontSize: '70px',
    fontFamily: '"Times New Roman", Times, serif',
    textShadow: '1px 1px orange',
    color: 'rgb(255, 200, 50)',
    backgroundColor: 'rgb(235, 235, 235)',
}