import { initialRaces, modifiedRaces } from "./initialRaces";


export function playerDraw(playersCount, playerNames) {
  
  let currentIndex = playerNames.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = playerNames[currentIndex];
    playerNames[currentIndex] = playerNames[randomIndex];
    playerNames[randomIndex] = temporaryValue;
  }

  const availableRaces = [...(Number(playersCount) === 6 ? modifiedRaces : initialRaces)];

  return Array.from({length: playersCount}, (_, i) => {

    const playerRaces = Array.from({length: 3}, () => {
      const randomRaceIndex = Math.floor(Math.random() * availableRaces.length);
      const selectedRace = availableRaces.splice(randomRaceIndex, 1)[0];
      return selectedRace.name;
    });
    
    return `Gracz ${i + 1}: ${playerNames[i]}, rasy: ${playerRaces.join(", ")}`;
  });
}