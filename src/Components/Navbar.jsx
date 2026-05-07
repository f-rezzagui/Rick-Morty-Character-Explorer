import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const favourites = useSelector((state) => state.favs.favourites);

  return (
    <nav >
      <Link to="/" >Accueil</Link>
      <Link to="/favourites" >
        Favoris ({favourites.length})
      </Link>
    </nav>
  );
};

export default Navbar;