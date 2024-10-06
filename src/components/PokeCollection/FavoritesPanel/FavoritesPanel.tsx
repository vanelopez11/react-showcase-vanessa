import styles from "./FavoritesPanel.module.css";
import * as React from "react";
import { UserContext } from "../UserProvider";



function FavoriteCard() {
  return (
    <>
      <div className={styles.favoriteCard}>
        <div className={styles.pokeTitle}>
          <h2 className={styles.pokeName}>PokeName</h2>
          <span className={styles.pokeId}>PokeId</span>
        </div>
        <img className={styles.pokeImage}></img>
        <div className={styles.pokeType}>
          <span>Type 1</span>
          <span>Type 2</span>
        </div>
      </div>
    </>
  );
}

function FavoritesPanel() {
  const userContext = React.useContext(UserContext)!;

  function handleLogout() {
    userContext.setUsername("");
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
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default FavoritesPanel;
