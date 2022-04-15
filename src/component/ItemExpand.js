import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addCart, setItem, addComment } from './actions/index.js';
import Cart from './Cart.js';
import Comment from './Comment.js';

const ItemExpand = () => {

    const [url, setURL] = useState("");
    const dispatch = useDispatch();

    dispatch(setItem(useLocation().state.item));
    const item = useSelector(state => state.item);

    useEffect(() => {
        if (typeof(item.ImageFile) === "string") {setURL(item.ImageFile);}
        else {
            const reader = new FileReader();  
            reader.addEventListener("load", () => {setURL(reader.result);}, false);
            reader.readAsDataURL(item.ImageFile[0]);
        }
    }, [item]);

    const handleAddCart = e => { e.preventDefault(); dispatch(addCart(item)); };

    const newComment = (comment) => { dispatch(addComment([item.Name, comment])); }

    return(
        <div className="expand-page flex">
            <div className='overlay'/>
            <Cart/>
            <div className='expand-item flex'>
                <img className="expand-image" src={url} alt=""/>
                <div className="expand-details grid">
                    <h1 className="expand-name">{item.Name}</h1>
                    <h1 className='expand-description'>{item.Description}</h1><br/>
                    <button className='add-cart' onClick={handleAddCart}>Add to Cart</button>
                    <div className='expand-1'>Price: ${parseFloat(item.Price).toFixed(2)}</div>
                    <div className='expand-2'>Stock: {item.Stock}</div>
                    <div className='expand-3'>Tag: {item.Tag}</div>
                </div>
            </div>
            <Comment comments={item.Comments} newComment={newComment}/>
        </div>    
    );
}

export default ItemExpand;