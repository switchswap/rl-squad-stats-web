import { PLAYER_MAP } from "../Util";

export interface Player {
  id: string;
  name: string;
  platform: string | undefined;
}

export function getPlayerFromId(id: string): Player {
  return {
    id: id,
    name: PLAYER_MAP[id],
    platform: undefined
  }
}