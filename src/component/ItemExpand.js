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
        <div id="expand-page">
            <Cart/>
            <div id='expand-item'>
                <img id="expand-image" src={url} alt=""/>
                <div id="expand-details">
                    <h1 id="expand-name">{item.Name}</h1>
                    <h1 id='expand-description'>{item.Description}</h1><br/>
                    <button id='add-cart' onClick={handleAddCart}>Add to Cart</button>
                    <div id='expand-1'>Price: ${parseFloat(item.Price).toFixed(2)}</div>
                    <div id='expand-2'>Stock: {item.Stock}</div>
                    <div id='expand-3'>Tag: {item.Tag}</div>
                </div>
            </div>
        </div>    
    );
}

export default ItemExpand;