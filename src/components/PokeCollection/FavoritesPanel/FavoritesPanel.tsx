import styles from "./FavoritesPanel.module.css";
import * as React from "react";
import { UserContext } from "../UserProvider";

interface Pokemon {
  id: number;
  name: string;
  types: { type: { name: string } }[];
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
}

function FavoriteCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className={styles.favoriteCard}>
      <div className={styles.pokeTitle}>
        <h2 className={styles.pokeName}>{pokemon.name}</h2>
        <span className={styles.pokeId}>#{pokemon.id}</span>
      </div>
      <img className={styles.pokeImage} src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
      <div className={styles.pokeType}>
        {pokemon.types.map((typeInfo, index) => (
          <span key={index}>{typeInfo.type.name}</span>
        ))}
      </div>
    </div>
  );
}


function FavoritesPanel() {
  const { favorites, setUsername } = React.useContext(UserContext)!;
  const [favoritePokemons, setFavoritePokemons] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    if (favorites.length > 0) {
      Promise.all(
        favorites.map(pokemonId =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(res => res.json())
        )
      ).then(setFavoritePokemons);
    }
  }, [favorites]);

  function handleLogout() {
    setUsername("");
  }

  return (
    <>
      <div className={styles.favoritesPanel}>
        <div className={styles.container}>
          <div className={styles.container__header}>
            <h2 className={styles.title}>Favorites</h2>
            <button className={styles.exit} onClick={handleLogout}>Exit</button>
          </div>
          <div className={styles.favoritesList}>
          {favoritePokemons.length === 0 ? (
            <p>No favorites added yet.</p>
          ) : (
            favoritePokemons.map(pokemon => (
              <FavoriteCard key={pokemon.id} pokemon={pokemon} />
            ))
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FavoritesPanel;
