import { useContext } from "react";
import { Link } from "react-router-dom";
import { PlayersContext } from "../Context/PlayersContext.jsx";

export function Results() {
  const { result, playersCount, runCount, isGameTrue } =
    useContext(PlayersContext);

  const randomIndex = Math.floor(Math.random() * playersCount);
  const selectedSpeaker =
    result[randomIndex] && result[randomIndex].split(":")[0];

  return (
    <div className="results">
      <Link to="/TI-app">
        <button className="startBtn">Powrót</button>
      </Link>
      {isGameTrue && (
        <div className="resultsTitle">
          {runCount === 1 && <h3>Wyniki Oficjalne</h3>}
          {runCount > 1 && <h3>Wyniki mniej Oficjalne</h3>}
        </div>
      )}

      <ul className="resultsList">
        {result.map((player, index) => (
          <li className="resultsItem" key={index}>
            {player}
          </li>
        ))}
      </ul>

      <p className="speaker">
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
