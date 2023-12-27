import { For, JSXElement } from "solid-js";
import { TeamDetails } from "../../types/MatchDetails";
import { Player } from "../../types/Player";

export interface TeamStatsTableProps {
  teamDetails: TeamDetails;
}
export function TeamStatsTable(props: TeamStatsTableProps): JSXElement {
  return (
    <table class="table table-sm w-1/3">
      <thead>
        <tr>
          <th></th>
          <th>Score</th>
          <th>Goals</th>
          <th>Assists</th>
          <th>Saves</th>
          <th>Shots</th>
        </tr>
      </thead>
      <tbody>
        <For
          each={props.teamDetails.players}
          fallback={
            <tr>
              <th>Loading...</th>
            </tr>
          }
        >
          {(item) => <PlayerStatsRow player={item} />}
        </For>
      </tbody>
    </table>
  );
}

interface PlayerStatsRowProps {
  player: Player;
}
function PlayerStatsRow(props: PlayerStatsRowProps): JSXElement {
  return (
    <tr>
      <td>{props.player.name}</td>
      <td>{props.player.stats?.core.score}</td>
      <td>{props.player.stats?.core.goals}</td>
      <td>{props.player.stats?.core.assists}</td>
      <td>{props.player.stats?.core.saves}</td>
      <td>{props.player.stats?.core.shots}</td>
    </tr>
  );
}
