import styles from "./FavoritesPanel.module.css";

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
  return (
    <>
      <div className={styles.favoritesPanel}>
        <div className={styles.container}>
          <h2 className={styles.title}>Favorites</h2>
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
