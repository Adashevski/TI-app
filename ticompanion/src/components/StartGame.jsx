import { initialRaces } from "./initialRaces";

export function startGame(value) {
  const playersCount = value;
  const availableRaces = [...initialRaces];
  const result = [];

  for (let i = 1; i <= playersCount; i++) {
    const randomRaceIndex = Math.floor(Math.random() * availableRaces.length);
    const selectedRace = availableRaces[randomRaceIndex];
    result.push(`Gracz ${i}: ${selectedRace.name}`);
    availableRaces.splice(randomRaceIndex, 1);
  }

  console.log("startGame:", result);
  return result;
}
