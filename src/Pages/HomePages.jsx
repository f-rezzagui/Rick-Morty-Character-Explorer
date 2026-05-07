import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => setCharacters(res.data.results))
      .catch(err => console.error(err));
  }, []);

  const filteredCharacters = characters.filter(char => 
    char.name.toLowerCase().includes(search.toLowerCase()) &&
    (status === '' || char.status === status)
  );

  return (
    <div >
      <input 
        placeholder="Rechercher un nom..." 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="">Tous les statuts</option>
        <option value="Alive">Vivants</option>
        <option value="Dead">Morts</option>
        <option value="unknown">Inconnus</option>
      </select>

      <div >
        {filteredCharacters.map(char => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
