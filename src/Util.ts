import { PlayerDetails } from "./types/PlayerDetails";

export function generatePlayerStats(): PlayerDetails[] {
  return [
    {
      name: "Lennard",
      pointsPerGame: 413.1,
      goalsPerGame: 1.4,
      assistsPerGame: 3.0,
      shotsPerGame: 1,
      savesPerGame: 2.3,
      goalPercentage: 51,
      winPercentage: 6,
      demosFor: 3,
      demosAgainst: 4,
    },
    {
      name: "Lonny",
      pointsPerGame: 140.9,
      goalsPerGame: 1.5,
      assistsPerGame: 2.5,
      savesPerGame: 2.1,
      shotsPerGame: 1,
      goalPercentage: 49,
      winPercentage: 19,
      demosFor: 1,
      demosAgainst: 3,
    },
    {
      name: "Inness",
      pointsPerGame: 150.5,
      goalsPerGame: 1.7,
      assistsPerGame: 2.8,
      savesPerGame: 2.0,
      shotsPerGame: 1,
      goalPercentage: 7,
      winPercentage: 81,
      demosFor: 5,
      demosAgainst: 2,
    },
    {
      name: "Seymour",
      pointsPerGame: 209.9,
      goalsPerGame: 3.8,
      assistsPerGame: 1.1,
      shotsPerGame: 1,
      savesPerGame: 4.1,
      goalPercentage: 93,
      winPercentage: 95,
      demosFor: 2,
      demosAgainst: 2,
    },
    {
      name: "Selie",
      pointsPerGame: 383.7,
      goalsPerGame: 1.5,
      assistsPerGame: 1.5,
      shotsPerGame: 1,
      savesPerGame: 3.9,
      goalPercentage: 34,
      winPercentage: 43,
      demosFor: 1,
      demosAgainst: 3,
    },
  ];
}

export const PLAYER_MAP: Record<string, string> = {
  "76561198034834341": "armada",
  f758f873340e2bee: "LainIwakra",
  "76561198113219349": "$witch",
  "9242c65131ab4684a84e4bdc8419dc6b": "Firestorm_B_C",
  "3cbbcb62789043b681a08a3e22c9c810": "Bronze Charizard",
  "0b1c159f6ba344ed83997df24896876e": "MrSaltea",
  "3d10c9ba3d8d499d8002f684299a2259": "MrSaltroll",
  "20f9fff5f6010900": "Mahifish6875",
  "8a4652f01cb441219ff2552bf1dfe7bf": "BiggethMommeth",
  "76561198104498918": "Calcifer",
  a5908295a92848d6b1ad7e1ce6556502: "JC11111118",
  "7f3a57d7025c47b88a0df0df60243702": "BlizzyBeee",
  "76561198051637596": "Hadanta",
  "7e686bb3d81e47b3b7aa8652907366e1": "Raldrich",
  d7840d81ecec4933ba34e96757cb627b: "LainIwakra",
  "95bca104366641e5a3e780d4d0afa5f2": "car_key2",
  "45228c0b4624470ebe5c4145a520540c": "GlizzyyGobblerr",
  "76561198183590321": "Brkn",
};
