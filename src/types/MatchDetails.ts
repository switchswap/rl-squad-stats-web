import { Player } from "./Player";

export interface MatchDetails {
  id: string;
  link: string;
  map_code: string;
  map_name: string;
  duration: number;
  overtime: boolean;
  overtime_seconds: number | null;
  date: string;
  date_has_timezone: boolean;
  blue: TeamDetails;
  orange: TeamDetails;
}

export interface TeamDetails {
  name: string;
  players: Player[];
  stats: TeamStats;
}

export interface PlayerCore {
  score: number;
  goals: number;
  assists: number;
  saves: number;
  shots: number;
  mvp: boolean;
}

export interface PlayerStats {
  core: PlayerCore;
}

export interface TeamCore {
  score: number;
  goals: number;
  goals_against: number;
  assists: number;
  saves: number;
  shots: number;
}

export interface TeamStats {
  core: TeamCore;
}

export function isMatchWinner(team: TeamDetails) {
  return team.stats.core.goals > team.stats.core.goals_against;
}

export function getTeamFromPlayerId(playerId: string, matchDetails: MatchDetails): TeamDetails {
  return matchDetails.blue.players.some((player) => player.id === playerId) ? matchDetails.blue : matchDetails.orange;
}
