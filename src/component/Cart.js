import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {

    const cart = useSelector(state => state.cart);

    const [total, setTotal] = useState(0); 

    useEffect(() => {
        let result = 0;
        cart.forEach(item => {
            result += item.Price
        });
        setTotal(result);
    }, [cart]);

    const getURL = (item) => {
        if (typeof(item.ImageFile) === "string") {return item.ImageFile;}
        else {
            const reader = new FileReader();  
            reader.addEventListener("load", () => {return reader.result;}, false);
            reader.readAsDataURL(item.ImageFile[0]);
        }
    };

    return (
        <div className='Cart' style={{display: cart.length > 0 ? "flex" : "none"}}>
            <h1 className='Cart-Label'>Cart</h1>
            {cart.map(item => <img src={getURL(item)} key={item.id} className='Cart-Li' alt=""/>)}
            <div className='Cost'>${total.toFixed(2)}</div>
            <Link to={{pathname: "/Checkout", state: {cost: total}}}><button className='Checkout-Btn'>Proceed to Checkout</button></Link>
        </div>     
    );
}

export default Cart;