import { ColumnDetails } from "../components/sortable_table/ColumnDetails";
import { Player } from "./Player";

export interface TeamDetails {
  players: Player[];
  totalWins: number;
  totalGames: number;
  winPercentage: number;
}

export function getTeamDetailsDataMap(isIndividual: boolean): Record<keyof TeamDetails, ColumnDetails> {
  return {
    players: {
      title: isIndividual ? "Player" : "Team",
      summary: isIndividual ? "Player" : "Team",
    },
    totalWins: {
      title: "Wins",
      summary: "Total wins",
    },
    totalGames: {
      title: "Games",
      summary: "Total games played",
    },
    winPercentage: {
      title: "Win %",
      summary: "Win percentage",
    },
  };
}

export function getTeamName(players: Player[]): string {
  return players
    .slice()
    .sort((p1, p2) => p1.name.localeCompare(p2.name))
    .map((player) => player.name)
    .join(" ");
}
