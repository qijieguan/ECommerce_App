import uuid from "react-uuid"; 

const defaultList = [
    {
        id: uuid(),
        ImageFile: "https://images.pexels.com/photos/3963086/pexels-photo-3963086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Name: '1 Roll of Toilet Paperrrrrrrrrrrrrrrrrrrrrrr',
        Description: 'Rare Commodity. Buy now!',
        Stock: 10,
        Price: 20.00,
        Tag: 'Cleaning'
    },
    {
        id: uuid(),
        ImageFile: "https://images.pexels.com/photos/5367428/pexels-photo-5367428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Name: '1 Bottle of Jack Daniel',
        Description: 'Get drunk everydayyyyyyyyy',
        Stock: 10,
        Price: 10.00,
        Tag: 'Drinks'
    },
    {
        id: uuid(),
        ImageFile: "https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        Name: '1 Bottle of Chanel Perfume',
        Description: 'Smells gooddddddd',
        Stock: 20,
        Price: 90.00,
        Tag: 'Beauty'
    },
    {
        id: uuid(),
        ImageFile: "https://live.staticflickr.com/65535/50984391773_ed0491f1e9_b.jpg",
        Name: '1 Set of Airpods',
        Description: 'Put it on when you drive',
        Stock: 20,
        Price: 100.00,
        Tag: 'Electronic'
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