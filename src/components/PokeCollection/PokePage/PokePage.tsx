
import FavoritesPanel from "../FavoritesPanel";
import SearchPanel from "../SearchPanel";
import styles from "./PokePage.module.css";

function PokePage() {
  return (
    <>
      <div className={styles.pokePage}>
        <SearchPanel />
        <FavoritesPanel />
      </div>
    </>
  )
  }
  
  export default PokePage;
  