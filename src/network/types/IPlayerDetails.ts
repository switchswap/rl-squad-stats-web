import { PlayerDetails } from "../../types/PlayerDetails";
import { TeamWins } from "../../types/TeamWins";

export interface IPlayerDetails {
  playerId: string;
  platform: string;
  playerName: string;
  totalGames: number;
  totalGoals: number;
  totalAssists: number;
  totalSaves: number;
  totalScore: number;
  totalShots: number;
  totalDemosFor: number;
  totalDemosAgainst: number;
}

export function toPlayerDetails(iPlayerDetails: IPlayerDetails, playerWins: TeamWins): PlayerDetails {
  return {
    name: iPlayerDetails.playerName + " (" + iPlayerDetails.platform + ")",
    pointsPerGame: iPlayerDetails.totalScore / iPlayerDetails.totalGames,
    goalsPerGame: iPlayerDetails.totalGoals / iPlayerDetails.totalGames,
    assistsPerGame: iPlayerDetails.totalAssists / iPlayerDetails.totalGames,
    shotsPerGame: iPlayerDetails.totalShots / iPlayerDetails.totalGames,
    savesPerGame: iPlayerDetails.totalSaves / iPlayerDetails.totalGames,
    goalPercentage: getGoalPercentage(iPlayerDetails.totalGoals, iPlayerDetails.totalShots),
    winPercentage: (playerWins.totalWins / playerWins.totalGames) * 100,
    demosFor: iPlayerDetails.totalDemosFor,
    demosAgainst: iPlayerDetails.totalDemosAgainst,
  }
}

function getGoalPercentage(totalGoals: number, totalShots: number) {
  if (totalGoals === 0) {
    return 0;
  }

  if (totalGoals > 0 && totalShots === 0) {
    return 100;
  }

  return (totalGoals / totalShots) * 100
}