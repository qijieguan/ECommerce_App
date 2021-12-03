import listReducer from "./ListReducer";
import searchReducer from "./SearchReducer"
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    itemList: listReducer,
    word: searchReducer
}); 

export default allReducers;