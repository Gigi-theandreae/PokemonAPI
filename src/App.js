import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
	const [pokemons, setPokemons] = useState([]);
	const [currentUrl, setCurrentUrl] = useState(
		"https://pokeapi.co/api/v2/pokemon?limit=10&offset=10"
	);

	useEffect(() => {
		getMorePokemons();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getMorePokemons = () => {
		axios.get(currentUrl).then((res) => {
			setCurrentUrl(res.data.next);
			const newPokemon = res.data.results.map((pokemon) => pokemon.name);
			setPokemons([...pokemons, ...newPokemon]);
		});
	};

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
