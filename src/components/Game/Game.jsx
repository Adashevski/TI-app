import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlayersContext } from "../../Context/PlayersContext.jsx";
import { startGame } from "../../utils/startGame.js";
import { newDate } from "../../utils/newDate.js";
import styles from "../Game/Game.module.css";

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
    lastGameResults,
    setLastGameResults,
    speaker,
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
  //poprzednie wyniki
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const toggleResultsVisibility = () => {
    setIsResultsVisible(!isResultsVisible);
  };
  //render
  return (
    <div className={styles.game}>
      <div className={styles.select}>
        <select
          className={styles.select__button}
          id="playersCount"
          onChange={onPlayersCountChange}
          value={playersCount}
        >
          <option value="3">3 Graczy</option>
          <option value="4">4 Graczy</option>
          <option value="5">5 Graczy</option>
          <option value="6">6 Graczy</option>
        </select>
        <button
          className={styles.select__buttonStart}
          onClick={onClickStartGame}
        >
          Rozpocznij losowanie
        </button>
      </div>
      {runCount === 0 && (
        <div className={styles.info}>
          <h6 className={styles.info__header}>To jest pierwsze losowanie</h6>
          <p className={styles.info__text}>
            Wybierz ilość graczy i rozpocznij losowanie
          </p>
        </div>
      )}
      {runCount > 0 && (
        <div className={styles.info}>
          {" "}
          <h6 className={styles.info__header}>Losowanie niedawno się odbyło</h6>
          <button
            onClick={toggleResultsVisibility}
            className={styles.info__button}
          >
            Sprawdź wyniki
          </button>
        </div>
      )}
      {isResultsVisible && (
        <div>
          <ul className={styles.results_list}>
            {lastGameResults.map((result, index) => (
              <li className={styles.results_list__item} key={index}>
                {result}
              </li>
            ))}
          </ul>
          <p className={styles.speaker}>Mówcą zostaje {speaker}</p>
        </div>
      )}
    </div>
  );
}
