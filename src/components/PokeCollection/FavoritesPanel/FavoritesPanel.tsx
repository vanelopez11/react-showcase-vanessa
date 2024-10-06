import styles from "./FavoritesPanel.module.css";
import * as React from "react";
import { UserContext } from "../UserProvider";
import { useState, useEffect } from 'react';

interface Pokemon {
  id: string;
  name: string;
  types: string[];
  avatarUrl?: string;
  image?: string;
  weight?: string;
  height?: string;
};

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
  const [favorites, setFavorites] = useState<Pokemon[]>([]); // Estado para almacenar los favoritos
  const [loading, setLoading] = useState<boolean>(true); // Estado para manejar la carga
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores
  const [isEmpty, setIsEmpty] = useState<boolean>(true); // Estado para manejar la carga
  
  useEffect(() => {
    console.log("User "+userContext.username);
    // Función para llamar a la API de favoritos
    const fetchFavorites = async () => {
      try {
        const response = await fetch(`https://poke-collection-lite-production.up.railway.app/api/${userContext.username}/favorites`);
        if (!response.ok) {
          throw new Error('Error fetching Pokémon favorites');
        }
        const data = await response.json();
        setFavorites(data); // Guardar los datos de favoritos        
        console.log("tamaño de Favoritos ",
          JSON.stringify(data)+" t " + data.data.length);
        if(data.data.length>0) setIsEmpty(false);
        else setIsEmpty(true);
        setLoading(false); // Indicar que la carga ha terminado
      } catch (error: any) {
        setError(error.message);
        setLoading(false); // Terminar la carga en caso de error
      }
    };
    fetchFavorites();
  }, []); // El array vacío asegura que useEffect se ejecute solo al montar el componente

  function handleLogout() {
    userContext.setUsername("");
  }

  if (loading) {
    return <p>Cargando Pokémon favoritos...</p>; // Muestra un mensaje mientras se cargan los datos
  }
    
  if (error) {
    return <p>Error: {error}</p>; // Muestra un mensaje de error si falla la llamada
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

            {isEmpty? <h1>No favorites pokemons</h1> : <div><h1>Cargar Pokemons</h1> <p>{JSON.stringify(favorites)}</p></div>}     

          </div>
        </div>
      </div>
    </>
  );
}

export default FavoritesPanel;
