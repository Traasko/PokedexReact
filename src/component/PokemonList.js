import React from "react";
import PokemonData from "../data/pokemonData.json";
import "../styles/PokemonList.css"
import { Link } from "react-router-dom";

const Pokemon = () => {
  return (
    <div>
      <div>
        <img src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'></img>
      </div>
      {PokemonData.map((pokemon) => (
        <div key={pokemon.id} className="pokemons-div">
        <h3>
            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name.french}</Link>
        </h3>
          <h3>
            <p>{pokemon.id}</p>
            <img src={pokemon.image.thumbnail}></img>
            <h3>{pokemon.type[0]}</h3>
          </h3>
        </div>
      ))}
    </div>
  );
};
export default Pokemon;