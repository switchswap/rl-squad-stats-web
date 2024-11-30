import { getPlayerFromId } from "../../types/Player";
import { TeamDetails } from "../../types/TeamWins";

export interface IPlayerWins {
  id: string;
  totalWins: number;
  totalGames: number;
}

export function playerWinsToTeamWins(iPlayerWins: IPlayerWins): TeamDetails {
  return {
    players: [getPlayerFromId(iPlayerWins.id)],
    totalGames: iPlayerWins.totalGames,
    totalWins: iPlayerWins.totalWins,
    winPercentage: (iPlayerWins.totalWins / iPlayerWins.totalGames) * 100,
  };
}
