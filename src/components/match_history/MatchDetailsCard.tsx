import { JSXElement, Show } from "solid-js";
import { MatchDetails, getTeamFromPlayerId, isMatchWinner } from "../../types/MatchDetails";
import { TeamStatsTable } from "./TeamStatsTable";
import { A } from "@solidjs/router";
import { FaSolidArrowUpRightFromSquare } from "solid-icons/fa";

export interface MatchDetailsCardProps {
  matchDetails: MatchDetails;
  playerIds: string[];
}
export function MatchDetailsCard(props: MatchDetailsCardProps): JSXElement {
  function formatSeconds(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(1, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  function formatTimeString(dateString: string): string {
    return new Date(dateString).toLocaleString();
  }

  function createMatchLink(): string {
    return props.matchDetails.link.replace("api/replays", "replay");
  }

  return (
    <div class="card card-bordered bg-base-100 shadow-xl m-2">
      <div class="card-body flex">
        <h2 class="card-title self-center">
          {isMatchWinner(getTeamFromPlayerId(props.playerIds[0], props.matchDetails)) ? (
            <span class="text-green-500">Win</span>
          ) : (
            <span class="text-red-500">Loss</span>
          )}{" "}
          @ {props.matchDetails.map_name} - {formatTimeString(props.matchDetails.date)}
          <A href={createMatchLink()} target="_blank" rel="noopener noreferrer">
            <FaSolidArrowUpRightFromSquare size={10} />
          </A>
        </h2>
        <div class="flex">
          <TeamStatsTable teamDetails={props.matchDetails.blue} />
          <div class="flex flex-col w-1/3 items-center self-center justify-center">
            <div class="grid grid-cols-3 gap-2">
              <p class="text-4xl font-bold text-blue-500">{props.matchDetails.blue.stats.core.goals}</p>
              <p class="text-4xl font-bold"> : </p>
              <p class="text-4xl font-bold text-orange-500">{props.matchDetails.orange.stats.core.goals}</p>
            </div>
            <p>{formatSeconds(props.matchDetails.duration)}</p>
            <Show when={props.matchDetails.overtime}>
              <p>{formatSeconds(props.matchDetails.overtime_seconds ?? 0)} overtime</p>
            </Show>
          </div>
          <TeamStatsTable teamDetails={props.matchDetails.orange} />
        </div>
      </div>
    </div>
  );
}
