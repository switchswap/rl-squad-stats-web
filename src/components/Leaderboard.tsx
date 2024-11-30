import { JSXElement } from "solid-js";
import { getTeamDetailsDataMap, getTeamName, TeamDetails } from "../types/TeamWins";
import { A } from "@solidjs/router";
import { SortableTable, TableRowProps } from "./sortable_table/SortableTable";
import { Player } from "../types/Player";

export interface LeaderBoardProps {
  title: string;
  data: TeamDetails[];
}

export function LeaderBoard(props: LeaderBoardProps): JSXElement {
  function isIndividual() {
    return props.data[0]?.players.length === 1;
  }

  function sortData(data: TeamDetails[], sortField: keyof TeamDetails, sortDescending: boolean): TeamDetails[] {
    return [...data].sort((a, b) => {
      const valueA = a[sortField];
      const valueB = b[sortField];

      if (sortField === "players") {
        let teamA = getTeamName(valueA as Player[]);
        let teamB = getTeamName(valueB as Player[]);
        return sortDescending ? teamB.localeCompare(teamA) : teamA.localeCompare(teamB);
      }

      if (sortField === "totalWins") {
        // If there is a tie in wins, sort by total games.
        return sortDescending
          ? a.totalWins === b.totalWins
            ? a.totalGames - b.totalGames
            : a.totalWins - b.totalWins
          : b.totalWins === a.totalWins
          ? b.totalGames - a.totalGames
          : b.totalWins - a.totalWins;
      }

      return sortDescending ? Number(valueB) - Number(valueA) : Number(valueA) - Number(valueB);
    });
  }

  return (
    <div class="card card-bordered max-h-96 w-1/3 shadow-xl overflow-clip">
      <h2 class="card-title justify-center bg-primary">{props.title}</h2>
      <SortableTable
        data={props.data}
        dataMap={getTeamDetailsDataMap(isIndividual())}
        tableRow={LeaderBoardTableRow}
        firstColumnLabel="Ranking"
        sortData={sortData}
        initialSortField="totalWins"
      />
    </div>
  );
}

function LeaderBoardTableRow(props: TableRowProps<TeamDetails>): JSXElement {
  function createMatchHistoryUrl(): string {
    const idString = props.data.players.map((player) => player.id).join(",");
    return "/history?player_id=" + idString;
  }

  return (
    <tr class="hover">
      <th>{props.position() + 1}</th>
      <td>
        <A href={createMatchHistoryUrl()}>{getTeamName(props.data.players)}</A>
      </td>
      <td>{props.data.totalWins}</td>
      <td>{props.data.totalGames}</td>
      <td>{((props.data.totalWins / props.data.totalGames) * 100).toFixed(2)}%</td>
    </tr>
  );
}
