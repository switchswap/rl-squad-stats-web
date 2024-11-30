import { JSXElement } from "solid-js";
import { PLAYER_DETAILS_DATA_MAP, PlayerDetails } from "../types/PlayerDetails";
import { SortableTable, TableRowProps } from "./sortable_table/SortableTable";

export interface PlayerStatsTableProps {
  data: PlayerDetails[];
}

export function PlayerStatsTable(props: PlayerStatsTableProps): JSXElement {
  return (
    <div class="card card-bordered overflow-auto shadow-xl">
      <h2 class="card-title justify-center bg-primary">Player Stats</h2>
      <SortableTable
        data={props.data}
        dataMap={PLAYER_DETAILS_DATA_MAP}
        tableRow={PlayerStatsTableRow}
        firstColumnLabel=""
      />
    </div>
  );
}

function PlayerStatsTableRow(props: TableRowProps<PlayerDetails>): JSXElement {
  return (
    <tr class="hover">
      <th>{props.position() + 1}</th>
      <td>{props.data.name}</td>
      <td>{props.data.pointsPerGame.toFixed(2)}</td>
      <td>{props.data.goalsPerGame.toFixed(2)}</td>
      <td>{props.data.assistsPerGame.toFixed(2)}</td>
      <td>{props.data.shotsPerGame.toFixed(2)}</td>
      <td>{props.data.savesPerGame.toFixed(2)}</td>
      <td>{props.data.goalPercentage.toFixed(2)}</td>
      <td>{props.data.winPercentage.toFixed(2)}%</td>
      <td>{props.data.demosFor}</td>
      <td>{props.data.demosAgainst}</td>
    </tr>
  );
}
