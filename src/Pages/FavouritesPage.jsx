import { useSelector } from 'react-redux';
import CharacterCard from '../components/CharacterCard';

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favs.favourites);

  return (
    <div >
      <h2>Mes Favoris</h2>
      <div >
        {favourites.length > 0 ? (
          favourites.map(char => <CharacterCard key={char.id} character={char} />)
        ) : (
          <p>Aucun favori pour le moment.</p>
        )}
      </div>
    </div>
  );
};

export default FavouritesPage;
