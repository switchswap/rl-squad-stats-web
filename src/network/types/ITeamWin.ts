import { getPlayerFromId } from "../../types/Player";
import { TeamWins } from "../../types/TeamWins";

export interface ITeamWins {
  players: string[];
  totalWins: number;
  totalGames: number;
}

export function toTeamWins(iTeamWins: ITeamWins): TeamWins {
  return {
    players: iTeamWins.players.map(getPlayerFromId),
    totalGames: iTeamWins.totalGames,
    totalWins: iTeamWins.totalWins,
  };
}
