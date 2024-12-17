import { Player } from "../../types/Player";
import { TeamDetails } from "../../types/TeamWins";

export interface ITeamWins {
  players: Player[];
  totalWins: number;
  totalGames: number;
}

export function toTeamWins(iTeamWins: ITeamWins): TeamDetails {
  return {
    players: iTeamWins.players,
    totalGames: iTeamWins.totalGames,
    totalWins: iTeamWins.totalWins,
    winPercentage: (iTeamWins.totalWins / iTeamWins.totalGames) * 100,
  };
}
