import React from "react";
import { Routes, Route } from "react-router-dom";
import { Game } from "./components/Game/Game.jsx";
import { Results } from "./components/Results/Results.jsx";
import { Hexgrid } from "./components/Results/Map/Hexgrid.jsx";
import "./App.css";

export function App() {

  return (
        <div className="App">
          <Routes>
            <Route path="/TI-app/" element={<Game />} />
            <Route path="/TI-app/results" element={<Results />} />
            <Route path="/TI-app/map" element={<Hexgrid />} />
          </Routes>
        </div>
  );
}

export default App;
