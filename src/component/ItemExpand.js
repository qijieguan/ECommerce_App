import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addCart } from './actions/index.js';
import Cart from './Cart.js';

const ItemExpand = () => {

    const item = useLocation().state.item;
    const [url, setURL] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        document.getElementById('header').style.background = 'orange';
        
        if (typeof(item.ImageFile) === "string") {setURL(item.ImageFile);}
        else {
            const reader = new FileReader();  
            reader.addEventListener("load", () => {setURL(reader.result);}, false);
            reader.readAsDataURL(item.ImageFile[0]);
        }
    }, [item]);

    const handleAddCart = event => {
        event.preventDefault();
        dispatch(addCart(item));
    };
 
    return(
        <div>
            <Cart/>
            <div className="expand-item">
                <img className="expand-image" src={url} alt=""/>
                <div className="expand-details">
                    <h1 className="expand-name expand-li">{item.Name}</h1>
                    <h1 className='expand-description expand-li'>{item.Description}</h1><br/>
                    <button className='add-cart' onClick={handleAddCart}>Add to Cart</button>
                    <div className='expand-li'>Price ${item.Price}</div>
                    <div className='expand-li'>Stock: {item.Stock}</div>
                    <div className='expand-li'>Tag: {item.Tag}</div>
                </div>
            </div>
        </div>
    );
}

export default ItemExpand;