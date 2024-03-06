import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { playersCount, result } from "../../redux/game/gameSelectors";
import styles from "./Results.module.css";
import { Hexgrid } from "./Map/Hexgrid";

export function Results() {

  const results = useSelector(result);
  const players = useSelector(playersCount)
  const randomIndex = Math.floor(Math.random() * players);

  const selectedSpeaker =
    results[randomIndex] && results[randomIndex].split(":")[0];


  return (
    <div className={styles.results}>
      <div className={styles.buttonContainer}>
        <Link to="/TI-app/">
          <button className={styles.backBtn}>Powrót</button>
        </Link>
      </div>
        <div >
          <h3 className={styles.results__title}>Wyniki </h3>
        </div>
      <ul className={styles.results_list}>
        {results.map((player, index) => (
          <li className={styles.results_list__item}
           key={index}>
            {player}
          </li>
        ))}
      </ul>
      <p className={styles.speaker}>
        {selectedSpeaker && `Mówcą zostaje ${selectedSpeaker}`}
      </p>
    </div>
  );
}
