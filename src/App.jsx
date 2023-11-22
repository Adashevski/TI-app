import React, { useState, useEffect } from "react";
import { PlayersProvider } from "./Context/PlayersContext.jsx";
import { Game } from "./components/Game.jsx";
import { Results } from "./components/Results.jsx";
import { clearLocalStorage } from "./components/clearLocalStorage.js";
import "./App.css";

export function App() {
  // Ustawienie isGameTrue na false przy odświeżeniu strony
  const [isGameTrue, setIsGameTrue] = useState(() => {
    const storedData = localStorage.getItem("isGameTrue");
    return storedData === "true";
  });
  const [isPageRefreshed, setIsPageRefreshed] = useState(false);

  useEffect(() => {
    const handlePageRefresh = () => {
      setIsPageRefreshed(true);
    };

    window.addEventListener("beforeunload", handlePageRefresh);

    return () => {
      window.removeEventListener("beforeunload", handlePageRefresh);
    };
  }, []);

  useEffect(() => {
    if (isPageRefreshed) {
      setIsGameTrue(false);
      setIsPageRefreshed(false);
    }
  }, [isPageRefreshed]);

  useEffect(() => {
    if (!isPageRefreshed) {
      localStorage.setItem("isGameTrue", isGameTrue.toString());
    }
  }, [isGameTrue, isPageRefreshed]);

  clearLocalStorage();
  return (
    <PlayersProvider>
      <div className="App">
        <Game />
        <Results />
      </div>
    </PlayersProvider>
  );
}

export default App;
