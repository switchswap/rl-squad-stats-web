import { For, JSXElement, createSignal } from "solid-js";
import { PlayerDetails, STATS_MAP } from "../types/PlayerDetails";

export interface PlayerStatsTableProps {
  title: string;
  playerStats: PlayerDetails[];
}

export function PlayerStatsTable(props: PlayerStatsTableProps): JSXElement {
  const [sortField, setSortField] = createSignal(Object.keys(STATS_MAP)[0]);
  const [sortDescending, setSortDescending] = createSignal(true);

  function onHeaderClick(newSortField: string) {
    // If sorting by the same thing, toggle sort order
    if (newSortField === sortField()) {
      console.log("Doubled");
      setSortDescending(!sortDescending());
      return;
    }

    setSortDescending(true);
    setSortField(newSortField);
  }

  function sortPlayerStats(
    sortField: string,
    sortDescending: boolean
  ): PlayerDetails[] {
    if (sortDescending) {
      return props.playerStats.sort((a, b) =>
        a[sortField as keyof PlayerDetails] <
        b[sortField as keyof PlayerDetails]
          ? 1
          : -1
      );
    } else {
      return props.playerStats.sort((a, b) =>
        a[sortField as keyof PlayerDetails] >
        b[sortField as keyof PlayerDetails]
          ? 1
          : -1
      );
    }
  }

  return (
    <div class="card card-bordered overflow-auto shadow-xl">
      <h2 class="card-title justify-center bg-primary">{props.title}</h2>
      <div class="overflow-auto">
        <table class="table table-pin-rows">
          <thead>
            <tr>
              <th></th>
              <For each={Object.keys(STATS_MAP)}>
                {(item) => {
                  return (
                    <th class="text-center">
                      <button
                        class="btn btn-sm bg-secondary"
                        title={STATS_MAP[item].summary}
                        onClick={() => onHeaderClick(item)}
                      >
                        {STATS_MAP[item].title}{" "}
                        {sortField() === item
                          ? sortDescending()
                            ? "🔽"
                            : "🔼"
                          : ""}
                      </button>
                    </th>
                  );
                }}
              </For>
            </tr>
          </thead>
          <tbody>
            <For
              each={sortPlayerStats(sortField(), sortDescending())}
              fallback={
                <tr>
                  <th>Loading...</th>
                </tr>
              }
            >
              {(item, index) => (
                <TableRow position={index() + 1} playerStats={item} />
              )}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface TableRowProps {
  position: number;
  playerStats: PlayerDetails;
}

function TableRow(props: TableRowProps): JSXElement {
  return (
    <tr class="hover">
      <th>{props.position}</th>
      <td>{props.playerStats.name}</td>
      <td class="text-center">{props.playerStats.pointsPerGame.toFixed(2)}</td>
      <td class="text-center">{props.playerStats.goalsPerGame.toFixed(2)}</td>
      <td class="text-center">{props.playerStats.assistsPerGame.toFixed(2)}</td>
      <td class="text-center">{props.playerStats.shotsPerGame.toFixed(2)}</td>
      <td class="text-center">{props.playerStats.savesPerGame.toFixed(2)}</td>
      <td class="text-center">{props.playerStats.goalPercentage.toFixed(2)}</td>
      <td class="text-center">{props.playerStats.winPercentage.toFixed(2)}%</td>
      <td class="text-center">{props.playerStats.demosFor}</td>
      <td class="text-center">{props.playerStats.demosAgainst}</td>
    </tr>
  );
}
