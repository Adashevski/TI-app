import React from "react";

export const Results = ({
  selectedSpeaker,
  runCount,
  lastGameResult,
  players,
}) => (
  <div className="results">
    <ul>
      {players.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
    <p>{selectedSpeaker && `Mówcą zostaje ${selectedSpeaker}`}</p>
    {runCount === 0 && <p>To jest pierwsze losowanie</p>}
    {runCount !== 0 && (
      <div>
        <h4 className="cheatCheck">
          Skrypt został uruchomiony {runCount} razy w ciągu ostatnich 5 minut.
        </h4>
        <p>Ostatnie losowanie:</p>
        <ul>
          {lastGameResult.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
