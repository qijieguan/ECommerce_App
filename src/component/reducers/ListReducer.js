import uuid from "react-uuid"; 

const defaultList = [
    {
        id: uuid(),
        ImageFile: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Name: 'Large Soft Brown Sofa',
        Description: 'Very Sturdy For Multiple People To Bounce On',
        Stock: 10,
        Price: 300.00,
        Tag: 'Furniture'
    },
    {
        id: uuid(),
        ImageFile: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Name: 'Queen Size Bed',
        Description: 'Soft and Comfy To Sleep On Forever',
        Stock: 10,
        Price: 800.00,
        Tag: 'Furniture'
    },
    {
        id: uuid(),
        ImageFile: "https://images.pexels.com/photos/7606067/pexels-photo-7606067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Name: 'Office Set',
        Description: 'A Desk, A Lamp And A Chair To Help Pass Time And Become Smart',
        Stock: 20,
        Price: 400.00,
        Tag: 'Furniture'
    },
    {
        id: uuid(),
        ImageFile: "https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Name: 'Dining Set',
        Description: '6 Chairs And 1 Table For To Eat Meals On',
        Stock: 20,
        Price: 700.00,
        Tag: 'Furniture'
    },
    {
        id: uuid(),
        ImageFile: "https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Name: 'Brown Wooden Shelf',
        Description: 'Large Shelf With 10 Large + 4 Small Compartments',
        Stock: 20,
        Price: 500.00,
        Tag: 'Furniture'
    }
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