import { ColumnDetails } from "../components/sortable_table/ColumnDetails";

export interface PlayerDetails {
  name: string;
  pointsPerGame: number;
  goalsPerGame: number;
  assistsPerGame: number;
  shotsPerGame: number;
  savesPerGame: number;
  goalPercentage: number;
  winPercentage: number;
  demosFor: number;
  demosAgainst: number;
}

export const PLAYER_DETAILS_DATA_MAP: Record<keyof PlayerDetails, ColumnDetails> = {
  name: {
    title: "Name",
    summary: "Name",
  },
  pointsPerGame: {
    title: "PPG",
    summary: "Points per game",
  },
  goalsPerGame: {
    title: "GPG",
    summary: "Goals per game",
  },
  assistsPerGame: {
    title: "APG",
    summary: "Assists per game",
  },
  shotsPerGame: {
    title: "SHPG",
    summary: "Shots per game",
  },
  savesPerGame: {
    title: "SVPG",
    summary: "Saves per game",
  },
  goalPercentage: {
    title: "GP",
    summary: "Goal percentage",
  },
  winPercentage: {
    title: "WP",
    summary: "Win percentage",
  },
  demosFor: {
    title: "DF",
    summary: "Demos for",
  },
  demosAgainst: {
    title: "DA",
    summary: "Demos against",
  },
};
