import './App.css';
import axios from "axios";
import {useState, useEffect} from "react";

function App() {

  const [pokemons, setPokemons] = useState([])

  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10";

  const getData = async(url) => {
    const res = await axios.get(url);
    setPokemons(res.data.results);
  }

  useEffect(() => {
    getData(pokemonUrl);
  }, [])

  const getMorePokemons =(url) =>{
    getData(url);
    setPokemons(...pokemons , pokemons: )
    
  }


  return (
    <div className="App">
      <ul>
        {pokemons.length > 0 && pokemons.map((pokemon) =>  
        <li key={pokemon.name}>
          {pokemon.name}
        </li>
        )}
      </ul>
      <button onClick={getMorePokemons}>Get More Pokemons</button>
    </div>
  );
}

export default App;
