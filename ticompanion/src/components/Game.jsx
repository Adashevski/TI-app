import React, { useContext } from "react";
import { PlayersContext } from "../Context/PlayersContext.jsx";
import { startGame } from "./startGame.jsx";
import { newDate } from "./newDate.js";

export function Game() {
  const {
    playersCount,
    setPlayersCount,
    setResult,
    runCount,
    setRunCount,
    setIsGameTrue,
    setLastRunTimestamp,
  } = useContext(PlayersContext);

  //zmiana stanu
  const onPlayersCountChange = (e) => {
    const newPlayersCount = e.target.value;
    setPlayersCount(newPlayersCount);
  };
  const onClickStartGame = () => {
    const newResult = startGame(playersCount);
    setResult(newResult);
    const updatedRunCount = runCount + 1;
    setRunCount(updatedRunCount);
    const updatedIsGameTrue = true;
    setIsGameTrue(updatedIsGameTrue);
    const updatedLastRunTimestamp = newDate();
    setLastRunTimestamp(updatedLastRunTimestamp);
  };

  //render
  return (
    <div className="header">
      <h1 className="title">Wybór Nacji</h1>
      <p>Wybierz ilość graczy:</p>
      <select
        className="select"
        id="playersCount"
        onChange={onPlayersCountChange}
        value={playersCount}
      >
        <option value="3">3 graczy</option>
        <option value="4">4 graczy</option>
        <option value="5">5 graczy</option>
        <option value="6">6 graczy</option>
      </select>
      <button className="startBtn" onClick={onClickStartGame}>
        Rozpocznij losowanie
      </button>
    </div>
  );
}
