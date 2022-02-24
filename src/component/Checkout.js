import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { deleteCart, clearCart } from './actions/index.js';
import uuid from 'react-uuid';


const Checkout = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [cost, setCost] = useState(useLocation().state.cost);
    const [message, setMessage] = useState("Cart is Empty. Happy shopping!");
    const [paid, setPaid] = useState(false);

    useEffect(() => {
        if (cart.length === 0) {setCost(0); return;} 
        let subtotal = 0;
        cart.forEach(item => {subtotal += parseFloat(item.Price); console.log(subtotal)});
        setCost(subtotal);
    }, [cart]);

    const getURL = (item) => {
        if (typeof(item.ImageFile) === "string") {return item.ImageFile;}
        else {
            const reader = new FileReader();  
            reader.addEventListener("load", () => {
                let select = document.getElementById(`${item.id}`);
                if (select) {select.src = reader.result;}
            }, false);
            reader.readAsDataURL(item.ImageFile[0]);
        }
    };

    const handlePay = () => {
        setMessage("Thank you for shopping! Happy New Year!");
        dispatch(clearCart());
        setPaid(true);
        document.getElementById("checkout-msg").firstChild.style.color = "green";
    };

    return (
        <div style={{display: 'flex', marginTop: '100px'}}>
            <div id="checkout-msg" style={{display: cart.length === 0 ? 'flex' : 'none', flexDirection: 'column'}}>   
                <div style={{margin: '40px 0', fontSize: '50px', color: "gray"}}>{message}</div>
                <AiOutlineShoppingCart size={225} color='gray' style={{display: paid ? 'none' : 'block'}}/>
                <BsCheckCircle size={225} color='green' style={{display: paid ? 'block' : 'none'}}/>
            </div>
            <div style={{display: cart.length > 0 ? 'flex' : 'none', width: '80%'}}>
                <div id='cart-items'>
                    {cart.map(item => 
                        <div className='cart-item' key={uuid()}>
                            <img src={getURL(item)} id={item.id} className="cart-img" alt=""/>
                            <div className='cart-price'>${parseFloat(item.Price).toFixed(2)}</div>
                            <FaTrashAlt className="trash-btn" style={{margin: '0 10px 30px 0'}}
                                size={24} 
                                color='grey'
                                onClick={() => {dispatch(deleteCart(item.id))}}
                            />
                        </div>
                    )}
                </div>
                <div id="review">
                    <div id='review-initial'>${parseFloat(cost).toFixed(2)}</div>
                    <div id='review-tax'>${parseFloat(cost*.1).toFixed(2)}</div>
                    <div style={{border: '2px solid grey', width: '80%'}}/>
                    <div id='review-final' style={{fontSize: '24px', color: 'black'}}>
                        ${parseFloat(cost + (cost*.1)).toFixed(2)}
                    </div>
                    <button id='pay-btn' onClick={handlePay}>Proceed to Pay</button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;