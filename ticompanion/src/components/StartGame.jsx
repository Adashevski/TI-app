import { useContext } from "react";
import { PlayersContext } from "../Context/PlayersContext.jsx";
import { initialAvailableRaces } from "./initialRaces";
const availableRaces = initialAvailableRaces;

export function StartGame() {
  const { playersCount } = useContext(PlayersContext);
  const result = [];
  const availableRacesCopy = [...availableRaces];

  for (let i = 1; i <= playersCount; i++) {
    if (availableRacesCopy.length === 0) {
      break;
    }
    const randomRaceIndex = Math.floor(
      Math.random() * availableRacesCopy.length
    );
    const selectedRace = availableRacesCopy[randomRaceIndex];
    result.push(`Gracz ${i}: ${selectedRace.name}`);
    availableRacesCopy.splice(randomRaceIndex, 1);
  }

  return result;
}

//const TIME_CHECK = 5 * 60 * 1000;
//useEffect(() => {
// const currentTime = new Date().getTime();
//if (lastRunTimestamp && currentTime - lastRunTimestamp > TIME_CHECK) {
// setLastGameResult([]);
//   }
//setLastRunTimestamp(currentTime);
// }, [lastRunTimestamp, setLastGameResult, setLastRunTimestamp]);
//const startGame = () => {

//if (newPlayers.length > 0) {
// const randomIndex = Math.floor(Math.random() * playerCount);
// const selectedPlayer = newPlayers[randomIndex].split(":")[0];
// setSelectedSpeaker(selectedPlayer);
// } else {
//    setSelectedSpeaker("");
//  }

//const randomIndex = Math.floor(Math.random() * playerCount);
// const selectedPlayer = newPlayers[randomIndex].split(":")[0];
//setSelectedSpeaker(selectedPlayer);

// const currentTime = new Date().getTime();
// const updatedRunCount = runCount + 1;
// setRunCount(updatedRunCount);

// setLastRunTimestamp(currentTime);
// localStorage.setItem("runCount", updatedRunCount.toString());
// localStorage.setItem("lastGameResult", JSON.stringify(newPlayers));
