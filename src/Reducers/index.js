import { combineReducers } from "redux";
import cart from './cart'

const allReducers = combineReducers({
    cart: cart
})

export default allReducers;