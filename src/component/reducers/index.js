import listReducer from "./ListReducer";
import searchReducer from "./SearchReducer";
import cartReducer from "./CartReducer";
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    itemList: listReducer,
    word: searchReducer,
    cart: cartReducer
}); 

export default allReducers;