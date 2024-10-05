import Header from "../Header";
import PokeCollection from "../PokeCollection";
import { UserProvider } from "../PokeCollection/UserProvider";
import Portfolio from "../Portfolio";
import TicTacToe from "../TicTacToe";
import styles from "./App.module.css";
import * as React from "react";

export type View = "Portfolio" | "ReactDev TicTacToe" | "Poke Collection";

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
