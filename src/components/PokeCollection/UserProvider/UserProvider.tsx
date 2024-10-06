import * as React from "react";
 
type UserContextType = {
  username: string;
  setUsername: (username: string) => void;
  favorites: number[];
  toggleFavorite: (pokemonId: number) => void;
}

export const UserContext = React.createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children } : { children: React.ReactNode }) {
  const [username, setUsername] = React.useState<string>("");
  const [favorites, setFavorites] = React.useState<number[]>([]);

  const toggleFavorite = (pokemonId: number) => {
    setFavorites(prev =>
      prev.includes(pokemonId)
        ? prev.filter(id => id !== pokemonId) // Remover si ya está
        : [...prev, pokemonId] // Agregar si no está
    );
  };

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
