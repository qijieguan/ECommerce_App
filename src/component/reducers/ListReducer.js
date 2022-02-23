import uuid from "react-uuid"; 

const defaultList = [
    {
        id: uuid(),
        ImageFile: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Name: 'Large Soft Brown Sofa',
        Description: 'Very Sturdy For Multiple People To Bounce On',
        Stock: 10,
        Price: 300.00,
        Tag: 'Furnature'
    },
    {
        id: uuid(),
        ImageFile: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Name: 'Queen Size Bed',
        Description: 'Soft and Comfy To Sleep On Forever',
        Stock: 10,
        Price: 400.00,
        Tag: 'Furnature'
    },
    {
        id: uuid(),
        ImageFile: "https://images.pexels.com/photos/7606067/pexels-photo-7606067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Name: 'Office Set',
        Description: 'Smells gooddddddd',
        Stock: 20,
        Price: 200.00,
        Tag: 'Furnature'
    },
]

const listReducer = (state = defaultList, action) => {
    switch (action.type) {
        case 'ADD_LIST': 
            return [...state, action.payload];
        default:
            return state;
    }
}

export default listReducer;