import FavoritesPanel from "../FavoritesPanel";
import SearchPanel from "../SearchPanel";
import styles from "./PokePage.module.css";
import * as React from "react";
import { UserContext } from "../UserProvider/UserProvider";

function PokePage() {
  
  const userContext = React.useContext(UserContext)!;
  const getFavoritesPoke = async () => {
    const url_userFav = `https://poke-collection-lite-production.up.railway.app/api/${userContext.username}/favorites`;
    try {
      const response = await fetch(url_userFav);

      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        // console.log(url_userFav);
        return data;
      }
    } catch (error) {
      console.error("Error al cargar los pokémones:", error);
    }
  };



  return (
    <>
      <div className={styles.pokePage}>
        <SearchPanel favoriteList={getFavoritesPoke}/>
        <FavoritesPanel />
      </div>
    </>
  );
}

export default PokePage;
