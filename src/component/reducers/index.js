import listReducer from "./ListReducer";
import searchReducer from "./SearchReducer";
import cartReducer from "./CartReducer";
import itemReducer from './itemReducer';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    itemList: listReducer,
    word: searchReducer,
    cart: cartReducer,
    item: itemReducer
}); 

export default allReducers;