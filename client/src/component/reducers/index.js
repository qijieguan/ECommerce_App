import listReducer from "./ListReducer";
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    itemList: listReducer
}); 

export default allReducers;