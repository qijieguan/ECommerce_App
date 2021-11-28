
const listReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_LIST': 
            return [...state, action.payload];
        default:
            return state;
    }
}

export default listReducer;