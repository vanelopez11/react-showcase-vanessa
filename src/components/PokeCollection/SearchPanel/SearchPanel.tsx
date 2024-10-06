import { useState, FormEvent } from "react";
import styles from "./SearchPanel.module.css";

interface PokemonType {
  type: {
    name: string;
  };
}

interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
}

const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';

function SearchPanel() {
  
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  
  const searchPokemon = (event: FormEvent) => {
    event.preventDefault();

    if (searchTerm.trim() === "") {
      setError("Please enter a Pokémon name");
      setPokemon(null);
      return;
    }

    fetch(`${ENDPOINT}${searchTerm.toLowerCase()}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Pokémon not found");
        }
        return response.json();
      })
      .then(data => {
        setPokemon(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setPokemon(null);
      });
  };

  return (
    <>
      <div className={styles.searchPanel}>
        <form className={styles.searchContainer} onSubmit={searchPokemon}>
          <input
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Pokémon"
          />
          <button className={styles.searchButton} type="submit">Search</button>
        </form>

        {error && <p className={styles.error}>{error}</p>}

        {pokemon && (
          <div className={styles.pokeCard}>
            <div className={styles.title}>
              <h2 className={styles.pokeName}>{pokemon.name}</h2>
              <span className={styles.pokeId}>#{pokemon.id}</span>
            </div>
            <img
              className={styles.pokeImage}
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
            <div className={styles.pokeType}>
              {pokemon.types.map((typeInfo, index) => (
                <span key={index}>{typeInfo.type.name}</span>
              ))}
            </div>
            <div className={styles.pokeStatus}>
              <div className={styles.status__container}>
                <div className={styles.status__number}>
                  <span>{pokemon.weight / 10} kg</span>
                </div>
                <span className={styles.status__title}>Weight</span>
              </div>
              <div className={styles.status__divisor}></div>
              <div className={styles.status__container}>
                <div className={styles.status__number}>
                  <span>{pokemon.height / 10} m</span>
                </div>
                <span className={styles.status__title}>Height</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchPanel;
