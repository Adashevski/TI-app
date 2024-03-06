import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPlayerNames, setPlayersCount, startGame } from '../../redux/game/gameSlice';
import { playersCount } from "../../redux/game/gameSelectors";
import { Link } from "react-router-dom";
import styles from "./Game.module.css";

export function Game() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const statePlayersCount = useSelector(playersCount);

  const [playerName, setPlayerName] = useState('');
  const [playersArray, setPlayersArray] = useState([]);

  const onPlayersCountChange = (e) => {
    dispatch(setPlayersCount(e.target.value));
  };

  const onPlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const onAddPlayer = () => { 
    setPlayersArray(prevPlayers => [...prevPlayers, playerName]);
    setPlayerName('');
  };

  const onClickStartGame = () => {
    dispatch(addPlayerNames(playersArray));
    dispatch(startGame());
    navigate("/TI-app/results");
  };

  return (
    <div className={styles.game}>
      <div className={styles.select}>
        <select className={styles.select__button}
          id="playersCount"
          onChange={onPlayersCountChange}
          value={statePlayersCount}
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
      <div className={styles.info}>
        <p className={styles.info__header}>
          Wybierz ilość graczy, dodaj imiona i rozpocznij losowanie!
        </p>
      </div>
      <div className={styles.addPlayer}>
        <input className={styles.addPlayerInput}
          type="text" 
          placeholder="Wpisz imię" 
          value={playerName}
          onChange={onPlayerNameChange}
        />
        <button 
          className={styles.addPlayerButton} 
          onClick={onAddPlayer}
        >
          Dodaj
        </button>
        <ul>
          <h3>Lista aktualnych graczy:</h3>
          {playersArray && playersArray.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>
      
      <div className={styles.map__button}>
      <Link to="/TI-app/map" className={styles.map__link}>
        Aktualna mapa
      </Link>
      </div>
    </div>
  );
}