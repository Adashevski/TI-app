import React, { useState, useEffect } from "react";

export const PlayersContext = React.createContext();

export function PlayersProvider({ children }) {
  const [playersCount, setPlayersCount] = useState(() => {
    const storedData = localStorage.getItem("playersCount");
    return storedData ? JSON.parse(storedData) : "";
  });
  useEffect(() => {
    localStorage.setItem("playersCount", JSON.stringify(playersCount));
  }, [playersCount]);

  return (
    <PlayersContext.Provider
      value={{
        playersCount,
        setPlayersCount,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
}

//const [result, setResult] = useState([]);
//const [selectedSpeaker, setSelectedSpeaker] = useState("");

//const [lastGameResult, setLastGameResult] = useState(() => {
//const storedData = localStorage.getItem("lastGameResult");
//return storedData ? JSON.parse(storedData) : [];
//});
//const [runCount, setRunCount] = useState(() => {
//const storedData = localStorage.getItem("runCount");
//return storedData ? JSON.parse(storedData) : "";
//});
//const [lastRunTimestamp, setLastRunTimestamp] = useState(() => {
//const storedData = localStorage.getItem("lastRunTimestamp");
//return storedData ? JSON.parse(storedData) : [];
// });

//useEffect(() => {
//  localStorage.setItem("lastGameResult", JSON.stringify(lastGameResult));
// }, [lastGameResult]);
// useEffect(() => {
//   localStorage.setItem("lastRunTimestamp", JSON.stringify(lastRunTimestamp));
// }, [lastRunTimestamp]);
// useEffect(() => {
//   localStorage.setItem("runCount", JSON.stringify(runCount));
// }, [runCount]);
