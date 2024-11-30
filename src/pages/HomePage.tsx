import { JSXElement, createResource } from "solid-js";
import { LeaderBoard } from "../components/Leaderboard";
import {
  getAllPlayerDetails,
  getThreesWinsPerTeam,
  getTotalWinsPerPlayer,
  getTwosWinsPerTeam,
} from "../network/Queries";
import { PlayerStatsTable } from "../components/PlayerStatsTable";
import { TeamDetails } from "../types/TeamWins";
import { PlayerDetails } from "../types/PlayerDetails";

export function HomePage(): JSXElement {
  const [allPlayerDetails] = createResource<PlayerDetails[], boolean>(true, getAllPlayerDetails);
  const [totalWinsPerPlayer] = createResource<TeamDetails[], boolean>(true, getTotalWinsPerPlayer);
  const [twosWinsPerTeam] = createResource<TeamDetails[], boolean>(true, getTwosWinsPerTeam);
  const [threesWinsPerTeam] = createResource<TeamDetails[], boolean>(true, getThreesWinsPerTeam);

  return (
    <div class="flex flex-col flex-grow gap-6 overflow-y-hidden">
      <div class="flex flex-row flex-nowrap gap-6">
        <LeaderBoard title="Overall" data={totalWinsPerPlayer() ?? []} />
        <LeaderBoard title="2v2" data={twosWinsPerTeam() ?? []} />
        <LeaderBoard title="3v3" data={threesWinsPerTeam() ?? []} />
      </div>
      <PlayerStatsTable data={allPlayerDetails() ?? []} />
    </div>
  );
}
