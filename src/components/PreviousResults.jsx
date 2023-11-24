import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PlayersContext } from "../Context/PlayersContext";

export function PreviousResults() {
  const { lastGameResults } = useContext(PlayersContext);
  return (
    <div>
      <Link to="/TI-app">
        <button>Powrót</button>
      </Link>
      <p>Poprzednie losowanie:</p>
      <ul>
        {lastGameResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}
