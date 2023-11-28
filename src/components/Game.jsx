import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PlayersContext } from "../Context/PlayersContext.jsx";
import { startGame } from "../utils/startGame.js";
import { newDate } from "../utils/newDate.js";

export function Game() {
  const navigate = useNavigate();
  const {
    playersCount,
    setPlayersCount,
    setResult,
    runCount,
    setRunCount,
    setIsGameTrue,
    setLastRunTimestamp,
    setLastGameResults,
  } = useContext(PlayersContext);

  //zmiana stanu
  const onPlayersCountChange = (e) => {
    const newPlayersCount = e.target.value;
    setPlayersCount(newPlayersCount);
  };
  const onClickStartGame = () => {
    const newResult = startGame(playersCount);
    setResult(newResult);
    setLastGameResults(newResult);
    const updatedRunCount = runCount + 1;
    setRunCount(updatedRunCount);
    const updatedIsGameTrue = true;
    setIsGameTrue(updatedIsGameTrue);
    const updatedLastRunTimestamp = newDate();
    setLastRunTimestamp(updatedLastRunTimestamp);
    navigate("/test");
  };

  //render
  return (
    <div className="gameHeader">
      <h1 className="gameTitle">Wybór Nacji</h1>
      <p className="gameText">Wybierz ilość graczy:</p>
      <div className="selectContainer">
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

      {runCount === 0 && (
        <div>
          <h6 className="firstGame">To jest pierwsze losowanie</h6>
        </div>
      )}
      {runCount > 0 && (
        <div>
          {" "}
          <h6 className="prevResultsTitle">Losowanie niedawno się odbyło</h6>
          <Link to="/prevResults">
            <button className="prevResultsBtn">Sprawdź wyniki</button>
          </Link>
        </div>
      )}
    </div>
  );
}
