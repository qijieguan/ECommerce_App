import './styles/cart.css';
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
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        if (cart.length === 0) {setCost(0); return;} 
        let subtotal = 0;
        cart.forEach(item => {subtotal += parseFloat(item.Price);});
        setCost(subtotal);
    }, [cart, update]);

    const getURL = (item) => {
        if (typeof(item.ImageFile) === "string") {return item.ImageFile;}
        else {
            const reader = new FileReader();  
            reader.addEventListener("load", () => {
                let select = document.getElementsByClassName(item.id);
                if (select) { for (let i = 0; i < select.length; ++i) { select[i].src = reader.result; }}
            }, false);
            reader.readAsDataURL(item.ImageFile[0]);
        }
    };

    const handlePay = () => {
        setMessage("Thank you for shopping! Happy New Year!");
        dispatch(clearCart());
        setPaid(true);
        document.querySelector(".checkout-msg").firstChild.style.color = "green";
    };

    return (
        <div style={{display: 'flex', marginTop: '100px'}}>
            <div className="checkout-msg" style={{display: cart.length === 0 ? 'flex' : 'none'}}>   
                <div>{message}</div>
                <AiOutlineShoppingCart className='cart-icon' style={{display: paid ? 'none' : 'block'}}/>
                <BsCheckCircle className='checkmark-icon' style={{display: paid ? 'block' : 'none'}}/>
            </div>
            {cart && cart.length ?
                <div style={{display: 'flex', width: '80%'}}>
                <div className='cart-items'>
                    {cart.map(item => 
                        <div className='cart-item flex' key={uuid()}>
                            <img src={getURL(item)} className={item.id} id="cart-img" alt=""/>
                            <div className='cart-details grid'>
                                <h1 className='cart-name'>{item.Name}</h1>
                                <div className='cart-price'>${parseFloat(item.Price).toFixed(2)}</div>
                                <FaTrashAlt className="trash-icon" 
                                    onClick={() => {dispatch(deleteCart(item.id)); setUpdate(!update)}}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className="review flex">
                    <div className='review-initial'>${parseFloat(cost).toFixed(2)}</div>
                    <div className='review-tax'>${parseFloat(cost*.1).toFixed(2)}</div>
                    <div style={{background: 'grey', height: '2px', width: '80%'}}/>
                    <div className='review-final'>${parseFloat(cost + (cost*.1)).toFixed(2)}</div>
                    <button className='pay-btn' onClick={handlePay}>Proceed to Pay</button>
                </div>
                </div>:''
            }
        </div>
    );
}

export default Checkout;