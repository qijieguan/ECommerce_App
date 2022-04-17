import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart, addComment } from './actions/index.js';
import Cart from './Cart.js';
import Comment from './Comment.js';


const ItemExpand = () => {

    var item = JSON.parse(sessionStorage.getItem("item"));

    const [url, setURL] = useState("");
    const [comments, setComments] = useState(item.Comments);
    const dispatch = useDispatch();


    useEffect(() => {
        if (typeof(item.ImageFile) === "string") {setURL(item.ImageFile);}
        else {
            const reader = new FileReader();  
            reader.addEventListener("load", () => {setURL(reader.result);}, false);
            reader.readAsDataURL(item.ImageFile[0]);
        }
    }, [item]);
    
    const handleAddCart = e => { e.preventDefault(); dispatch(addCart(item)); };

    const newComment = (comment) => { 
        item.Comments.push(comment); 
        setComments(item.Comments);
        sessionStorage.setItem('item', JSON.stringify(item));
        item = JSON.parse(sessionStorage.getItem("item"));
        dispatch(addComment([item.Name, item.Comments]));
    }

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
            <Comment comments={comments} newComment={newComment}/>
        </div>    
    );
}

export default ItemExpand;