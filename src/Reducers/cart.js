const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        // Item already exists, update its quantity
        const updatedCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // Item doesn't exist, add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }
    case 'REMOVE_ITEM_FROM_CART':
    return {
      ...state,
      cartItems: state.cartItems.filter((item, index) => index !== action.payload)
    }
    case 'CLEAR_CART':
    return {
      ...state,
      cartItems: []
    };
    case 'INCREMENT_QUANTITY':
    return {
      ...state,
      cartItems: state.cartItems.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    };
  case 'DECREMENT_QUANTITY':
    const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex === -1) {
        return state;
      }
      const currentQuantity = state.cartItems[itemIndex].quantity;
      if (currentQuantity > 0) {
        const updatedItems = [...state.cartItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: currentQuantity - 1
        };
        return { ...state, cartItems: updatedItems };
      } else {
        return state;
      }
    default:
      return state
  }
}

export default cartReducer