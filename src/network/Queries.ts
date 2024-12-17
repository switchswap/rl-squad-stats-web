import { IPlayerDetails, toPlayerDetails } from "./types/IPlayerDetails";
import { IPlayerWins, playerWinsToTeamWins } from "./types/IPlayerWins";
import { TeamDetails } from "../types/TeamWins";
import { ITeamWins, toTeamWins } from "./types/ITeamWin";
import { PlayerDetails } from "../types/PlayerDetails";
import { MatchDetails } from "../types/MatchDetails";
import { DbInfo } from "../types/DbInfo";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getAllPlayerDetails(): Promise<PlayerDetails[]> {
  console.log("getAllPlayerDetails");
  const response = await fetch(BASE_URL + "/details");
  const results: IPlayerDetails[] = await response.json();
  const winsPerPlayer = await getTotalWinsPerPlayer();
  return results.map((details) => {
    return toPlayerDetails(
      details,
      winsPerPlayer.find((item) => item.players[0].id === details.playerId) ?? {
        players: [],
        totalWins: 0,
        totalGames: 0,
        winPercentage: 0,
      }
    );
  });
}

export async function getTotalWinsPerPlayer(): Promise<TeamDetails[]> {
  console.log("getTotalWinsPerPlayer");
  const response = await fetch(BASE_URL + "/wins/individual");
  const results: IPlayerWins[] = await response.json();
  return results.map(playerWinsToTeamWins);
}

export async function getTwosWinsPerTeam(): Promise<TeamDetails[]> {
  console.log(BASE_URL);
  console.log("getTwosWinsPerTeam");
  const response = await fetch(BASE_URL + "/wins/2s", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const results: ITeamWins[] = await response.json();
  return results.map(toTeamWins);
}

export async function getThreesWinsPerTeam(): Promise<TeamDetails[]> {
  console.log("getThreesWinsPerTeam");
  const response = await fetch(BASE_URL + "/wins/3s");
  const results: ITeamWins[] = await response.json();
  return results.map(toTeamWins);
}

export async function getDbInfo(): Promise<DbInfo> {
  console.log("getDbInfo");
  const response = await fetch(BASE_URL + "/info");
  const results = await response.json();
  return results;
}

export async function getMatchHistory(playerIds: string[]): Promise<MatchDetails[]> {
  console.log("getMatchHistory");
  let params = new URLSearchParams();
  playerIds.forEach((playerId) => params.append("player_id", playerId));
  const response = await fetch(BASE_URL + "/history/?" + params.toString());
  const results = response.json();
  return results;
}
