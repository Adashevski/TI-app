import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PlayersContext } from "../Context/PlayersContext.jsx";
import { startGame } from "../utils/startGame.js";
import { newDate } from "../utils/newDate.js";

export function TestPage() {
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
    navigate("/results");
  };

  //render
  return (
    <div className="testgameHeader">
      <div className="testselectContainer">
        <select
          className="testselect"
          id="playersCount"
          onChange={onPlayersCountChange}
          value={playersCount}
        >
          <option value="3">3 Graczy</option>
          <option value="4">4 Graczy</option>
          <option value="5">5 Graczy</option>
          <option value="6">6 Graczy</option>
        </select>
        <button className="teststartBtn" onClick={onClickStartGame}>
          Rozpocznij losowanie
        </button>
      </div>

      {runCount === 0 && (
        <div className="testTitle">
          <h6 className="firstGame">To jest pierwsze losowanie</h6>
          <p className="firstGame__text">
            Wybierz ilość graczy i rozpocznij losowanie
          </p>
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
