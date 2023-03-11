import { PokemonCard } from "../PokemonCard";
import "./PokemonList.css";

export const PokemonList = ({ pokemons, loading }) => {
  console.log("abajo está pokemons");
  console.log(pokemons);
  return (
    <div className="pokemon-list-display">
      {!loading ? (
        pokemons.map((pokemon, idx) => (
          <PokemonCard
            key={`pokemon-card-${idx}`}
            pokemon={pokemon}
            loading={loading}
          />
        ))
      ) : (
        <p>Cargando ...</p>
      )}
    </div>
  );
};
