import React, { useLocalStorage } from "react";

const [playerCount, setPlayerCount] = useLocalStorage("playerCount", 3);

export const handlePlayerCountChange = (event) => {
  setPlayerCount(parseInt(event.target.value, 10));
};
