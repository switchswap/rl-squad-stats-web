import { PLAYER_MAP } from "../Util";
import { PlayerStats } from "./MatchDetails";

export interface Player {
  id: string;
  name: string;
  car_name: string | null;
  platform: string;
  stats: PlayerStats | null;
}

export function getPlayerFromId(id: string): Player {
  return {
    id: id,
    name: PLAYER_MAP[id],
    car_name: "",
    platform: "",
    stats: null,
  };
}
