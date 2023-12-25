import { For, JSXElement } from "solid-js";
import { TeamWins } from "../types/TeamWins";

export interface LeaderBoardProps {
  title: string;
  rankings: TeamWins[];
  isIndividual: boolean;
}

export function LeaderBoard(props: LeaderBoardProps): JSXElement {
  function sortRankings(a: TeamWins, b: TeamWins) {
    if (a.totalWins < b.totalWins) {
      return 1;
    } else if (a.totalWins === b.totalWins) {
      return a.totalGames > b.totalGames ? 1 : -1;
    } else {
      return -1;
    }
  }

  return (
    <div class="card card-bordered max-h-96 w-1/3 shadow-xl overflow-clip">
      <h2 class="card-title justify-center bg-primary">{props.title}</h2>
      <div class="overflow-x-auto">
        <table class="table table-pin-rows">
          <thead>
            <tr>
              <th>Rank</th>
              <th>{props.isIndividual ? "Player" : "Team"}</th>
              <th>Wins</th>
              <th>Games</th>
              <th>Win %</th>
            </tr>
          </thead>
          <tbody>
            <For
              // Sort the rankings in descending order
              each={props.rankings.sort(sortRankings)}
              fallback={
                <tr>
                  <th>Loading...</th>
                </tr>
              }
            >
              {(item, index) => <TableRow rank={index() + 1} winDetails={item} />}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface TableRowProps {
  rank: number;
  winDetails: TeamWins;
}
function TableRow(props: TableRowProps): JSXElement {
  let teamName = "";
  props.winDetails.players
    .sort((p1, p2) => {
      return p1.name > p2.name ? 1 : p1.name < p2.name ? -1 : 0;
    })
    .forEach((player) => {
      teamName += player.name + " ";
    });

  return (
    <tr class="hover">
      <th>{props.rank}</th>
      <td>{teamName}</td>
      <td>{props.winDetails.totalWins}</td>
      <td>{props.winDetails.totalGames}</td>
      <td>{((props.winDetails.totalWins / props.winDetails.totalGames) * 100).toFixed(2)}%</td>
    </tr>
  );
}
