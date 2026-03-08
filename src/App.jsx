import { useFetcthCharacters} from './hooks/useFecthCharacters';
import './App.css';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';


  function App() {
  const pokemon = useFetcthCharacters(urlPokemon)
  const rick = useFetcthCharacters(urlRick)

  if(!pokemon||!rick) return <p>Cargando...</p>
  
  return (
    <>
    <h2>Pokemon</h2>
    <p>{pokemon.name}</p>
    <img src={pokemon.sprites.front_default} />

    <h2>Rick & Morty</h2>
    <p>{rick.name}</p>
    <img src={rick.image} />
    </>
  );
}

export default App;
