import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

const Cart = () => {

    const cart = useSelector(state => state.cart);

    const [total, setTotal] = useState(0); 

    useEffect(() => {
        let result = 0;
        cart.forEach(item => {
            result += parseFloat(item.Price);
        });
        setTotal(result);
    }, [cart]);

    const getURL = (item) => {
        if (typeof(item.ImageFile) === "string") {return item.ImageFile;}
        else {
            const reader = new FileReader();  
            reader.addEventListener("load", () => {
                let select = document.getElementsByClassName(item.id);
                if (select) {
                    for (let i = 0; i < select.length; ++i) { select[i].src = reader.result; }
                }
            }, false);
            reader.readAsDataURL(item.ImageFile[0]);
        }
    };

    return (
        <div id='cart' style={{display: cart.length > 0 ? "flex" : "none"}}>
            <div id='cart-label'>Cart</div>
            {cart.map(item => <img src={getURL(item)} key={uuid()} className={item.id} id='cart-li' alt=""/>)}
            <div id='cost'>${parseFloat(total).toFixed(2)}</div>
            <Link to={{pathname: "/Checkout", state: {cost: parseFloat(total).toFixed(2)}}}>
                <button id='checkout-btn'>Proceed to Checkout</button>
            </Link>
        </div>     
    );
}

export default Cart;