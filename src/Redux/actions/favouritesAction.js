export const addFavourite = (character) => ({
  type: 'ADD_FAVOURITE',
  payload: character,
});

export const removeFavourite = (id) => ({
  type: 'REMOVE_FAVOURITE',
  payload: id,
});
