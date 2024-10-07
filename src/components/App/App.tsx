import Header from "../Header";
import PokeCollection from "../PokeCollection";
import { UserProvider } from "../PokeCollection/UserProvider";
import Portfolio from "../Portfolio";
import TicTacToe from "../TicTacToe";
import Wordle from "../Wordle";
import styles from "./App.module.css";
import * as React from "react";

export type View = "Portfolio" | "ReactDev TicTacToe" | "Poke Collection" | "Wordle";

function App() {
  const [view, setView] = React.useState<View>("Portfolio");

  const components = {
    "Portfolio": <Portfolio setView={setView} />,
    "ReactDev TicTacToe": <TicTacToe />,
    "Poke Collection": (
      <UserProvider>
        <PokeCollection />
      </UserProvider>
    ),
    "Wordle": <Wordle />
  };

  return (
    <>
      <Header projectName={view} setView={setView}/>
      <div className={styles.main}>
        {components[view]}
      </div>
    </>
  );
}

export default App;
