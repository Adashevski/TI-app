import { useContext } from "react";
import { PlayersContext } from "./PlayersContext";

export function usePlayersCount() {
  const { playersCount } = useContext(PlayersContext);
  return playersCount;
}
