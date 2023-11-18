import React from "react";
import { PlayersProvider } from "./Context/PlayersContext.jsx";
import { Game } from "./components/Game.jsx";
import "./App.css";

export function App() {
  return (
    <PlayersProvider>
      <div className="App">
        <Game />
      </div>
    </PlayersProvider>
  );
}

export default App;
