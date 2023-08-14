const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
      case 'ADD_ITEM_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        }
      default:
        return state
    }
  }
  
  export default cartReducer