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

export interface StatDetails {
  title: string;
  summary: string;
}

export const STATS_MAP: Record<string, StatDetails> = {
  "name": {
    summary: "Name",
    title: "Name"
  },
  "pointsPerGame": {
    title: "PPG",
    summary: "Points per game"
  },
  "goalsPerGame": {
    title: "GPG",
    summary: "Goals per game"
  },
  "assistsPerGame": {
    title: "APG",
    summary: "Assists per game"
  },
  "shotsPerGame": {
    title: "SHPG",
    summary: "Shots per game"
  },
  "savesPerGame": {
    title: "SVPG",
    summary: "Saves per game"
  },
  "goalPercentage": {
    title: "GP",
    summary: "Goal percentage"
  },
  "winPercentage": {
    title: "WP",
    summary: "Win percentage"
  },
  "demosFor": {
    title: "DF",
    summary: "Demos for"
  },
  "demosAgainst": {
    title: "DA",
    summary: "Demos against"
  }
}

export function getPlayerStatSummary(playerStatField: string): string {
  return STATS_MAP[playerStatField].summary ?? "";
}

export function getPlayerStatTitle(playerStatField: string): string {
  return STATS_MAP[playerStatField].title ?? "";
}