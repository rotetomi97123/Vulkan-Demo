const favouriteReducer = (state = { favouriteItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE_TO_CART':
      const newItemFavourite = action.payload;
      const existingItemIndexFavourite = state.favouriteItems.findIndex(item => item.id === newItemFavourite.id);

      if (existingItemIndexFavourite !== -1) {
        // Item already exists, update its quantity
        const updatedFavouriteItems = state.favouriteItems.map((item, index) =>
          index === existingItemIndexFavourite ? { ...item, quantity: item.quantity + 1 } : item
        );

        return {
          ...state,
          favouriteItems: updatedFavouriteItems,
        };
      } else {
        // Item doesn't exist, add it to the cart
        return {
          ...state,
          favouriteItems: [...state.favouriteItems, newItemFavourite],
        };
      }
    case 'REMOVE_FAVOURITE_FROM_CART':
    return {
      ...state,
      favouriteItems: state.favouriteItems.filter((item, index) => index !== action.payload)
    }
    case 'CLEAR_FAVOURITE_CART':
    return {
      ...state,
      favouriteItems: []
    };

    default:
      return state
  }
}

export default favouriteReducer