import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { PlayersProvider } from "./Context/PlayersContext.jsx";
import { Game } from "./components/Game.jsx";
import { Results } from "./components/Results.jsx";
import { clearLocalStorage } from "./utils/clearLocalStorage.js";
import "./App.css";
import { PreviousResults } from "./components/PreviousResults.jsx";
import { TestPage } from "./components/TestPage.jsx";
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
      <Router>
        <div className="App">
          <Routes>
            <Route path="/TI-app" element={<Game />} />
            <Route path="/TI-app/test" element={<TestPage />} />
            <Route path="/results" element={<Results />} />
            <Route path="/prevResults" element={<PreviousResults />} />
          </Routes>
        </div>
      </Router>
    </PlayersProvider>
  );
}

export default App;
