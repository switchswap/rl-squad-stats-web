import { IPlayerDetails, toPlayerDetails } from "./types/IPlayerDetails";
import { IPlayerWins, playerWinsToTeamWins } from "./types/IPlayerWins";
import { TeamWins } from "../types/TeamWins";
import { ITeamWins, toTeamWins } from "./types/ITeamWin";
import { PlayerDetails } from "../types/PlayerDetails";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function getAllPlayerDetails(): Promise<PlayerDetails[]> {
  console.log("getAllPlayerDetails");
  const response = await fetch(BASE_URL + "/details");
  const results: IPlayerDetails[] = await response.json();
  const winsPerPlayer = await getTotalWinsPerPlayer();
  return results.map(details => {
    return toPlayerDetails(details, winsPerPlayer.find(item => item.players[0].id === details.playerId) ?? {
      players: [],
      totalWins: 0,
      totalGames: 0
    });
  });
}

export async function getTotalWinsPerPlayer(): Promise<TeamWins[]> {
  console.log("getTotalWinsPerPlayer");
  const response = await fetch(BASE_URL + "/wins/individual");
  const results: IPlayerWins[] = await response.json();
  return results.map(playerWinsToTeamWins)
}

export async function getTwosWinsPerTeam(): Promise<TeamWins[]> {
  console.log(BASE_URL);
  console.log("getTwosWinsPerTeam");
  const response = await fetch(BASE_URL + "/wins/2s", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  const results: ITeamWins[] = await response.json();
  return results.map(toTeamWins)
}

export async function getThreesWinsPerTeam(): Promise<TeamWins[]> {
  console.log("getThreesWinsPerTeam");
  const response = await fetch(BASE_URL + "/wins/3s");
  const results: ITeamWins[] = await response.json();
  return results.map(toTeamWins)
}

export async function getTotalGamesPlayed(): Promise<number> {
  console.log("getTotalGamesPlayed");
  const response = await fetch(BASE_URL + "/count");
  const results = await response.json();
  return results["count"]
}