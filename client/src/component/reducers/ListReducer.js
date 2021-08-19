import uuid from "react-uuid"; 

const defaultList = [
    {id: uuid(), name: 'Lemon', stock: 100, description: "very sour", price: 0.5},
    {id: uuid(), name: 'Apple', stock: 100, description: "very sweet", price: 0.5},
    {id: uuid(), name: 'Strawberry', stock: 100, description: "very sweet", price: 0.5},
];

const listReducer = (state = defaultList, action) => {
    switch (action.type) {
        case 'SET_LIST': 
            return [...state, action.payload];
        default:
            return state;
    }
}

export default listReducer;