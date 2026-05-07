const initialState = {
  favourites: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      if (state.favourites.find((char) => char.id === action.payload.id)) return state;
      return { ...state, favourites: [...state.favourites, action.payload] };
    case 'REMOVE_FAVOURITE':
      return {
        ...state,
        favourites: state.favourites.filter((char) => char.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;