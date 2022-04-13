import listReducer from "./ListReducer";
import searchReducer from "./SearchReducer";
import cartReducer from "./CartReducer";
import commentReducer from './CommentReducer';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    itemList: listReducer,
    word: searchReducer,
    cart: cartReducer,
    commentList: commentReducer
}); 

export default allReducers;