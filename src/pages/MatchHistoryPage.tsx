import { useSearchParams } from "@solidjs/router";
import { For, JSXElement, createResource } from "solid-js";
import { getMatchHistory } from "../network/Queries";
import { MatchDetails } from "../types/MatchDetails";
import { MatchDetailsCard } from "../components/match_history/MatchDetailsCard";
import { getPlayerFromId } from "../types/Player";

export function MatchHistoryPage(): JSXElement {
  const [searchParams] = useSearchParams();
  const [matchHistory] = createResource<MatchDetails[], boolean>(true, () => getMatchHistory(getPlayerIds()));

  function getPlayerIds(): string[] {
    return searchParams.player_id.split(",");
  }

  function createTitle(): string {
    const playerIds = getPlayerIds();
    return "Match history for: " + playerIds.map((playerId) => getPlayerFromId(playerId).name).join(", ");
  }

  function sortedMatchHistory(matchHistory: MatchDetails[]) {
    return matchHistory.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

  return (
    <div class="flex flex-col flex-grow gap-6 overflow-y-hidden">
      <div>
        <p class="text-2xl font-bold">{createTitle()}</p>
      </div>
      <div class="overflow-auto">
        <For
          each={sortedMatchHistory(matchHistory() ?? [])}
          fallback={
            <tr>
              <th>Loading...</th>
            </tr>
          }
        >
          {(item) => <MatchDetailsCard matchDetails={item} playerIds={getPlayerIds()} />}
        </For>
      </div>
    </div>
  );
}
