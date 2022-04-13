const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'INSERT_CART': 
            return [...state, action.payload];
        case "DELETE_CART":
            let index = state.findIndex(item => item.id === action.payload);
            state.splice(index, 1);
            return state;
        case "CLEAR_CART":
            return [];
        default:
            return state;
    }
}

export default cartReducer;