import React from "react";
import { useParams } from "react-router-dom";
import pokemonData from "../data/pokemonData.json";
import "../styles/PokemonList.css"

const PokemonDetails = () => {
    const { id } = useParams();
    const pokemon = pokemonData.find((pokemon) => pokemon.id.toString() === id);
   
    if (!pokemon) {
      return <div>Pokemon introuvable</div>;
    }
   
    return (
        <div key={pokemon.id} className="pokemons-div2">
        <h2>{pokemon.name.french}</h2>
        <h3>
            <p>{pokemon.id}</p>
            <img src={pokemon.image.thumbnail}></img>
            <h3>Type : {pokemon.type[0]}</h3>
            <p>Point de vie : {pokemon.base.HP}</p>
            <p>Attack : {pokemon.base.Attack}</p>
            <p>Défense : {pokemon.base.Defense}</p>
            <p>Spé. Attaque : {pokemon.base.SpAttack}</p>
            <p>Spé. Défense : {pokemon.base.SpDefense}</p>
            <p>Vitesse : {pokemon.base.Speed}</p>
          </h3>
        {
    }
      </div>
    );
  };
   
  export default PokemonDetails;