import { JSXElement, createResource } from "solid-js";
import { LeaderBoard } from "../components/Leaderboard";
import {
  getAllPlayerDetails,
  getThreesWinsPerTeam,
  getTotalWinsPerPlayer,
  getTwosWinsPerTeam,
} from "../network/Queries";
import { PlayerStatsTable } from "../components/PlayerStatsTable";
import { TeamWins } from "../types/TeamWins";
import { PlayerDetails } from "../types/PlayerDetails";

export function HomePage(): JSXElement {
  const [allPlayerDetails] = createResource<PlayerDetails[], boolean>(true, getAllPlayerDetails);
  const [totalWinsPerPlayer] = createResource<TeamWins[], boolean>(true, getTotalWinsPerPlayer);
  const [twosWinsPerTeam] = createResource<TeamWins[], boolean>(true, getTwosWinsPerTeam);
  const [threesWinsPerTeam] = createResource<TeamWins[], boolean>(true, getThreesWinsPerTeam);

  return (
    <div class="flex flex-col flex-grow gap-6 overflow-y-hidden">
      <div class="flex flex-row flex-nowrap gap-6">
        <LeaderBoard title="Overall" rankings={totalWinsPerPlayer() ?? []} isIndividual={true} />
        <LeaderBoard title="2v2" rankings={twosWinsPerTeam() ?? []} isIndividual={false} />
        <LeaderBoard title="3v3" rankings={threesWinsPerTeam() ?? []} isIndividual={false} />
      </div>
      <PlayerStatsTable title="Player Stats" playerStats={allPlayerDetails() ?? []} />
    </div>
  );
}
