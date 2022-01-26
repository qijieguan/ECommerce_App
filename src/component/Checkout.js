import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import { deleteCart, clearCart } from './actions/index.js';


const Checkout = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [cost, setCost] = useState(useLocation().state.cost);
    const [message, setMessage] = useState("Cart is Empty. Happy shopping!");

    useEffect(() => {
        if (cart.length === 0) {setCost(0); return;} 
        let subtotal = 0;
        cart.forEach(item => {subtotal += item.Price;});
        setCost(subtotal);
    }, [cart]);

    const getURL = (item) => {
        if (typeof(item.ImageFile) === "string") {return item.ImageFile;}
        else {
            const reader = new FileReader();  
            reader.addEventListener("load", () => {return reader.result;}, false);
            reader.readAsDataURL(item.ImageFile[0]);
        }
    };

    const handlePay = () => {
        setMessage("Thank you for shopping! Happy New Year!");
        dispatch(clearCart())
        document.getElementsByClassName("Checkout-Msg")[0].style.color = "green";
    };

    return (
        <div style={{display: 'flex', marginTop: '100px'}}>
            <div className="Checkout-Msg" 
                style={{display: cart.length === 0 ? 'flex' : 'none', fontSize: '40px', color: "gray"}}
            >{message}</div>
            <div style={{display: cart.length > 0 ? 'flex' : 'none', width: '80%'}}>
                <div className='Cart-Items'>
                    {cart.map(item => 
                        <div className='Cart-Item'>
                            <img src={getURL(item)} className="Cart-Img" alt=""/>
                            <div className='Cart-Price'>${item.Price.toFixed(2)}</div>
                            <FaTrashAlt className="Trash-Btn" style={{margin: '0 10px 30px 0'}}
                                size={24} 
                                color='grey'
                                onClick={() => {dispatch(deleteCart(item.id))}}
                            />
                        </div>
                    )}
                </div>
                <div className="Review">
                    <div className='Review-Initial'>${cost.toFixed(2)}</div>
                    <div className='Review-Tax'>${(cost*.1).toFixed(2)}</div>
                    <div style={{border: '2px solid grey', width: '80%'}}/>
                    <div className='Review-Final' style={{fontSize: '24px', color: 'black'}}>
                        ${(cost + (cost*.1)).toFixed(2)}
                    </div>
                    <button className='Pay-Btn' onClick={handlePay}>Proceed to Pay</button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;