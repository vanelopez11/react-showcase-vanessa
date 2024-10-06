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
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: PokemonType[];
}

export const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';

function SearchPanel() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (pokemonId: number) => {
    if (favorites.includes(pokemonId)) {
      setFavorites(favorites.filter(id => id !== pokemonId));
    } else {
      setFavorites([...favorites, pokemonId]);
    }
  };

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
              src={pokemon.sprites.other['official-artwork'].front_default}
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

            {/* Botón de favoritos */}
            <button
              className={`${styles.addToFavorites} ${
                favorites.includes(pokemon.id) ? styles.removeToFavorites : ""
              }`}
              onClick={() => toggleFavorite(pokemon.id)}
            >
              <div className={styles.favoriteImage}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="white" />
                  <path
                    d={favorites.includes(pokemon.id)
                      ? "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      : "M12.5 2L15.59 8.26L22.5 9.27L17.5 14.14L18.68 21.02L12.5 17.77L6.32 21.02L7.5 14.14L2.5 9.27L9.41 8.26L12.5 2Z"
                    }
                    fill={favorites.includes(pokemon.id) ? "#3B76F6" : "none"}
                    stroke="#3B76F6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span>
                {favorites.includes(pokemon.id) ? "Remove from Favorites" : "Add to Favorites"}
              </span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchPanel;
