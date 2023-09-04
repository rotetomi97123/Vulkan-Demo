import { combineReducers } from "redux";
import cart from './cart'
import favourite from "./favourite";

const allReducers = combineReducers({
    cart: cart,
    favourite: favourite
})

export default allReducers;