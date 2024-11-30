import { getPlayerFromId } from "../../types/Player";
import { TeamDetails } from "../../types/TeamWins";

export interface ITeamWins {
  players: string[];
  totalWins: number;
  totalGames: number;
}

export function toTeamWins(iTeamWins: ITeamWins): TeamDetails {
  return {
    players: iTeamWins.players.map(getPlayerFromId),
    totalGames: iTeamWins.totalGames,
    totalWins: iTeamWins.totalWins,
    winPercentage: (iTeamWins.totalWins / iTeamWins.totalGames) * 100,
  };
}
