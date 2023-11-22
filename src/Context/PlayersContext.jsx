import React, { useState, useEffect } from "react";

export const PlayersContext = React.createContext();

export function PlayersProvider({ children }) {
  //ilość graczy
  const [playersCount, setPlayersCount] = useState(() => {
    const storedData = localStorage.getItem("playersCount");
    return storedData ? JSON.parse(storedData) : "3";
  });
  useEffect(() => {
    localStorage.setItem("playersCount", JSON.stringify(playersCount));
  }, [playersCount]);
  // rezultat
  const [result, setResult] = useState([]);
  //ile losowań się odbyło
  const [runCount, setRunCount] = useState(() => {
    const storedData = localStorage.getItem("runCount");
    return storedData ? parseInt(storedData, 10) : 0;
  });
  useEffect(() => {
    localStorage.setItem("runCount", runCount.toString());
  }, [runCount]);

  //Czy losowanie się odbyło
  const [isGameTrue, setIsGameTrue] = useState(() => {
    const storedData = localStorage.getItem("isGameTrue");
    return storedData === "true";
  });
  useEffect(() => {
    localStorage.setItem("isGameTrue", isGameTrue.toString());
  }, [isGameTrue]);
  //kiedy losowanie się odbyło
  const [lastRunTimestamp, setLastRunTimestamp] = useState(() => {
    const storedData = localStorage.getItem("lastRunTimestamp");
    return storedData ? new Date(storedData) : null;
  });
  useEffect(() => {
    if (lastRunTimestamp !== null) {
      localStorage.setItem("lastRunTimestamp", lastRunTimestamp.toString());
    }
  }, [lastRunTimestamp]);

  return (
    <PlayersContext.Provider
      value={{
        playersCount,
        setPlayersCount,
        result,
        setResult,
        runCount,
        setRunCount,
        isGameTrue,
        setIsGameTrue,
        lastRunTimestamp,
        setLastRunTimestamp,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
}

//useEffect(() => {
//  localStorage.setItem("lastGameResult", JSON.stringify(lastGameResult));
// }, [lastGameResult]);
// useEffect(() => {
//   localStorage.setItem("lastRunTimestamp", JSON.stringify(lastRunTimestamp));
// }, [lastRunTimestamp]);
//
