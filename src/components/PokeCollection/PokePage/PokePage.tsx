import FavoritesPanel from "../FavoritesPanel";
import SearchPanel from "../SearchPanel";
import styles from "./PokePage.module.css";
import * as React from "react";
import { UserContext } from "../UserProvider/UserProvider";

export type FavoriteAPIResponse = {
  id: number;
  name: string;
  types: string[];
  avatarUrl: string;
};

function PokePage() {
  const [favoritesData, setfavoritesData] = React.useState<FavoriteAPIResponse[]>([]);
  const [statusFav, setStatusFav] = React.useState<boolean>(false)

  const userContext = React.useContext(UserContext)!;
  
  React.useEffect(() => {
    const getFavoritesPoke = async () => {
      const url_userFav = `https://poke-collection-lite-production.up.railway.app/api/${userContext.username}/favorites`;

      try {
        const response = await fetch(url_userFav);

        if (response.ok) {
          const dataFav = await response.json();
          const listFav = dataFav.data;
          setfavoritesData(listFav);
          console.log(listFav);
        }
      } catch (error) {
        console.error("Error al cargar los pokémones:", error);
      }
    };
    getFavoritesPoke();
  }, [statusFav, userContext]);


  function handleStatusFav () {
    setStatusFav(!statusFav);
  }

  return (
    <>
      <div className={styles.pokePage}>
        <SearchPanel favoritesData={favoritesData} handleStatusFav={handleStatusFav}/>
        <FavoritesPanel favoritesData={favoritesData}/>
      </div>
    </>
  );
}

export default PokePage;
