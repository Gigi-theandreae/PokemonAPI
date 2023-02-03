import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
	const [pokemons, setPokemons] = useState([]);
	const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=10");
  const [nextPageUrl, setNextPageUrl] = useState();


	useEffect(() => {
		axios
			.get(currentUrl)
			.then((res) => {
        setNextPageUrl(res.data.next)
				setPokemons(res.data.results.map((pokemon) => pokemon.name));
       
			});
	}, [currentUrl]);
  
  const getMorePokemons = () => {
    setCurrentUrl(nextPageUrl);
    setPokemons(pokemons)
  }

	return (
		<div className="App">
			<ul>
				{pokemons.map((pokemon) => (
					<li key={pokemon}>{pokemon}</li>
				))}
			</ul>
			<button onClick={getMorePokemons}>Get More Pokemons</button>
		</div>
	);
}

export default App;
