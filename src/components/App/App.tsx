import Header from "../Header";
import PokeCollection from "../PokeCollection";
import { UserProvider } from "../PokeCollection/UserProvider";
import Portfolio from "../Portfolio";
import TicTacToe from "../TicTacToe";
import styles from "./App.module.css";
import * as React from "react";

type View = "portfolio" | "TicTacToe" | "PokeCollection";

function App() {
  const [view, setView] = React.useState<View>("portfolio");

  return (
    <>
      <Header projectName={view} />
      <div className={styles.main}>
        <Portfolio />
        <TicTacToe />
        <UserProvider>
          <PokeCollection />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
