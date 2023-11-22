import { useContext } from "react";
import { PlayersContext } from "../Context/PlayersContext.jsx";

export function Results() {
  const { result, playersCount, runCount, isGameTrue } =
    useContext(PlayersContext);

  const randomIndex = Math.floor(Math.random() * playersCount);
  const selectedSpeaker =
    result[randomIndex] && result[randomIndex].split(":")[0];

  return (
    <div className="results">
      {!isGameTrue && (
        <div>
          {runCount === 0 && <h3>To jest pierwsze losowanie</h3>}
          {runCount > 0 && <h3>Losowanie niedawno się odbyło</h3>}
        </div>
      )}

      {isGameTrue && (
        <div>
          {runCount === 1 && <h3>Wyniki Oficjalne</h3>}
          {runCount > 1 && <h3>Wyniki mniej Oficjalne</h3>}
        </div>
      )}

      <ul>
        {result.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <p>{selectedSpeaker && `Mówcą zostaje ${selectedSpeaker}`}</p>
    </div>
  );
}
