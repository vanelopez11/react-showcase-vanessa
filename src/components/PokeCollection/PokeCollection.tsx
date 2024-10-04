import LoginPage from "./LoginPage";
import styles from "./PokeCollection.module.css";
import PokePage from "./PokePage";

function PokeCollection() {
  return (
    <>
      <div className={styles.poke}>
        <div className={styles.container}>
          {/* <div className={styles.pokeBoard}>
          </div> */}
          <LoginPage />
          <PokePage />
        </div>
      </div>
    </>
  );
}

export default PokeCollection;
