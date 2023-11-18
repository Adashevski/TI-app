import React from "react";
import PropTypes from "prop-types";
import { useStartGame } from "./startGame";
import { handlePlayerCountChange } from "./handlePlayerCountChange";

export const Header = ({ handlePlayerCountChange }) => {
  const { playerCount, startGame, setPlayerCount } = useStartGame();

  return (
    <div className="header">
      <h1 className="title">Wybór Nacji</h1>
      <p>Wybierz ilość graczy:</p>
      <select
        className="select"
        id="playerCount"
        onChange={handlePlayerCountChange}
        value={playerCount}
      >
        <option value="3">3 graczy</option>
        <option value="4">4 graczy</option>
        <option value="5">5 graczy</option>
        <option value="6">6 graczy</option>
      </select>
      <button className="startBtn" onClick={startGame}>
        Rozpocznij losowanie
      </button>
    </div>
  );
};

Header.propTypes = {
  handlePlayerCountChange: PropTypes.func.isRequired,
};
