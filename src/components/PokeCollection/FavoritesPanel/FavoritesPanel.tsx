import styles from "./FavoritesPanel.module.css";
import * as React from "react";
import { UserContext } from "../UserProvider";
import { FavoriteAPIResponse } from "../PokePage";
import { colorType } from "../colorUtils";

type FavoritesPanelProps = {
  favoritesData: FavoriteAPIResponse[];
}

function capitalizeFirst(text: string) {
  if (!text) return ""; // Manejar cadenas vacías
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function FavoritesPanel(props: FavoritesPanelProps) {
  const { setUsername } = React.useContext(UserContext)!;

  function handleLogout() {
    setUsername("");
  }

  function FavoriteCard({ pokemon }: { pokemon: FavoriteAPIResponse }) {
    return (
      <div className={styles.favoriteCard}>
        <div className={styles.pokeTitle}>
          <h2 className={styles.pokeName}>{capitalizeFirst(pokemon.name)}</h2>
          <span className={styles.pokeId}>#{String(pokemon.id).padStart(3, "0")}</span>
        </div>
        <img className={styles.pokeImage} src={pokemon.avatarUrl} />
        <div className={styles.pokeType}>
          {pokemon.types.map((type, index) => (
            <span style={colorType(type)} key={index}>{capitalizeFirst(type)}</span>
          ))}
        </div>
      </div>
    );
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
          {props.favoritesData.length === 0 ? (
            <p>No favorites added yet.</p>
          ) : (
            props.favoritesData.map(pokemon => (
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
