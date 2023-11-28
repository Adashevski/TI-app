import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { PlayersContext } from "../../Context/PlayersContext.jsx";
import styles from "./Results.module.css";

export function Results() {
  const { result, playersCount, runCount, isGameTrue, speaker, setSpeaker } =
    useContext(PlayersContext);

  const randomIndex = Math.floor(Math.random() * playersCount);
  const selectedSpeaker =
    result[randomIndex] && result[randomIndex].split(":")[0];

  useEffect(() => {
    setSpeaker(selectedSpeaker);
  }, [speaker]);

  return (
    <div className={styles.results}>
      <div className={styles.buttonContainer}>
        <Link to="/TI-app">
          <button className={styles.backBtn}>Powrót</button>
        </Link>
      </div>
      {isGameTrue && (
        <div className={styles.results__title}>
          {runCount === 1 && <h3>Wyniki Oficjalne</h3>}
          {runCount > 1 && <h3>Wyniki mniej Oficjalne</h3>}
        </div>
      )}

      <ul className={styles.results_list}>
        {result.map((player, index) => (
          <li className={styles.results_list__item} key={index}>
            {player}
          </li>
        ))}
      </ul>

      <p className={styles.speaker}>
        {selectedSpeaker && `Mówcą zostaje ${selectedSpeaker}`}
      </p>
      {/* <div>
        {runCount === 1 && (
          <h4>Skrypt został uruchomiony raz w ciągu ostatnich 5 minut.</h4>
        )}
        {runCount > 1 && (
          <h4>
            Skrypt został uruchomiony {runCount} razy w ciągu ostatnich 5 minut.
          </h4>
        )}
      </div> */}
    </div>
  );
}
