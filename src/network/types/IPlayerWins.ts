import { getPlayerFromId } from "../../types/Player";
import { TeamWins } from "../../types/TeamWins";

export interface IPlayerWins {
  id: string;
  totalWins: number;
  totalGames: number;
}

export function playerWinsToTeamWins(iPlayerWins: IPlayerWins): TeamWins {
  return {
    players: [getPlayerFromId(iPlayerWins.id)],
    totalGames: iPlayerWins.totalGames,
    totalWins: iPlayerWins.totalWins
  }
}