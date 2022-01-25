import { useSelector } from 'react-redux';

const Cart = () => {

    const cart = useSelector(state => state.cart);

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
        </div>
    );
}

export default Cart;