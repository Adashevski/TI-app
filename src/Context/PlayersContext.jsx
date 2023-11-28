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
  //mówca
  const [speaker, setSpeaker] = useState(() => {
    const storedData = localStorage.getItem("speaker");
    return storedData ? JSON.parse(storedData) : "";
  });
  useEffect(() => {
    localStorage.setItem("speaker", JSON.stringify(speaker));
  }, [speaker]);

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
  //poprzedni rezultat
  const [lastGameResults, setLastGameResults] = useState(() => {
    const storedData = localStorage.getItem("lastGameResults");
    const parsedData = storedData && JSON.parse(storedData);
    return Array.isArray(parsedData) ? parsedData : [];
  });
  useEffect(() => {
    localStorage.setItem("lastGameResults", JSON.stringify(lastGameResults));
  }, [lastGameResults]);
  return (
    <PlayersContext.Provider
      value={{
        playersCount,
        setPlayersCount,
        result,
        setResult,
        speaker,
        setSpeaker,
        runCount,
        setRunCount,
        isGameTrue,
        setIsGameTrue,
        lastRunTimestamp,
        setLastRunTimestamp,
        lastGameResults,
        setLastGameResults,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
}
