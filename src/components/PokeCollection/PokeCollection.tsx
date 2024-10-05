import LoginPage from "./LoginPage";
import styles from "./PokeCollection.module.css";
import PokePage from "./PokePage";
import * as React from "react";
import { UserContext } from "./UserProvider";

function PokeCollection() {
  const userContext = React.useContext(UserContext)!;

  if (!userContext) {
    throw new Error("PokeCollection must be used within a UserProvider");
  }

  return (
    <>
      <div className={styles.poke}>
        <div className={styles.container}>
          {userContext.username ? <PokePage /> : <LoginPage />}
        </div>
      </div>
    </>
  );
}

export default PokeCollection;
