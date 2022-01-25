const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CART': 
            return [...state, action.payload];
        default:
            return state;
    }
}

export default cartReducer;