export const showSection = () => {
  return {
      type: 'OPEN'
  };
}
export const hideSection = () => {
  return {
      type: 'CLOSE'
  };
}
export const addItemToCart = (item) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: item
  }
}
export const removeItemFromCart = (index) => {
  return {
    type: 'REMOVE_ITEM_FROM_CART',
    payload: index
  }
}
export const clearCart = () => {
  return {
    type: 'CLEAR_CART'
  }
}
export const handleIncrement = (item) => {
  return {
      type: 'INCREMENT_QUANTITY',
      payload: {id : item.id}
  }
}
export const handleDecrement = (item) => {
  return {
      type: 'DECREMENT_QUANTITY',
      payload: {id : item.id}
  }
}
