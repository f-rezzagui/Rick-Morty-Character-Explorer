import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../Redux/actions/favouritesAction';

const CharacterCard = ({ character }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favs.favourites);
  const isFav = favourites.some((fav) => fav.id === character.id);

  return (
    <div >
      <img src={character.image} alt={character.name}/>
      <h3>{character.name}</h3>
      <p>{character.status} - {character.species}</p>
      {isFav ? (
        <button onClick={() => dispatch(removeFavourite(character.id))}>Retirer des favoris</button>
      ) : (
        <button onClick={() => dispatch(addFavourite(character))}>Ajouter aux favoris</button>
      )}
    </div>
  );
};

export default CharacterCard;