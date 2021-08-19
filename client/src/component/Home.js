import { useSelector, useDispatch } from 'react-redux';
import { setList } from './actions/index';
import Item from './Item.js';

export default function Home() {

    const items = useSelector(state => state.itemList);
    const dispatch = useDispatch();

    return (
        <div className="Home">
            <div style={customStyle}>On Sale!</div>
            <div className="Items-Display">
                {items.map(item => <Item key={item.id} item={item} />)}
            </div>
        </div>
    );
}

const customStyle = {
    margin: '100px 0 50px 20px',
    fontSize: '40px'
}