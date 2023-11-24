import { initialRaces } from "./initialRaces";

export function startGame(value) {
  const playersCount = value;
  const availableRaces = [...initialRaces];
  const result = [];

  for (let i = 1; i <= playersCount; i++) {
    const playerRaces = [];

    for (let j = 0; j < 3; j++) {
      const randomRaceIndex = Math.floor(Math.random() * availableRaces.length);
      const selectedRace = availableRaces[randomRaceIndex];
      playerRaces.push(selectedRace.name);
      availableRaces.splice(randomRaceIndex, 1);
    }

    result.push(`Gracz ${i}: ${playerRaces.join(", ")}`);
  }

  console.log("startGame:", result);
  return result;
}
