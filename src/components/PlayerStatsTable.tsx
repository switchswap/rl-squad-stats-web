import { For, JSXElement, createSignal } from "solid-js";
import { PlayerDetails, STATS_MAP } from "../types/PlayerDetails";
import { FaSolidSort, FaSolidSortDown, FaSolidSortUp } from "solid-icons/fa";

export interface PlayerStatsTableProps {
  title: string;
  playerStats: PlayerDetails[];
}

export function PlayerStatsTable(props: PlayerStatsTableProps): JSXElement {
  const [sortField, setSortField] = createSignal(Object.keys(STATS_MAP)[0]);
  const [sortDescending, setSortDescending] = createSignal(false);

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

  function sortPlayerStats(sortField: string, sortDescending: boolean): PlayerDetails[] {
    return props.playerStats.sort((a, b) => {
      const valueA = a[sortField as keyof PlayerDetails];
      const valueB = b[sortField as keyof PlayerDetails];

      if (sortField === "name") {
        return sortDescending
          ? valueB.toString().localeCompare(valueA.toString())
          : valueA.toString().localeCompare(valueB.toString());
      }

      return sortDescending ? Number(valueB) - Number(valueA) : Number(valueA) - Number(valueB);
    });
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
                    <th>
                      <span class="select-none" title={STATS_MAP[item].summary} onClick={() => onHeaderClick(item)}>
                        <div class="flex items-center align-bottom gap-1">
                          <p>{STATS_MAP[item].title}</p>
                          <div>
                            {sortField() === item ? (
                              sortDescending() ? (
                                <FaSolidSortDown />
                              ) : (
                                <FaSolidSortUp />
                              )
                            ) : (
                              <FaSolidSort />
                            )}
                          </div>
                        </div>
                      </span>
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
              {(item, index) => <TableRow position={index() + 1} playerStats={item} />}
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
      <td>{props.playerStats.pointsPerGame.toFixed(2)}</td>
      <td>{props.playerStats.goalsPerGame.toFixed(2)}</td>
      <td>{props.playerStats.assistsPerGame.toFixed(2)}</td>
      <td>{props.playerStats.shotsPerGame.toFixed(2)}</td>
      <td>{props.playerStats.savesPerGame.toFixed(2)}</td>
      <td>{props.playerStats.goalPercentage.toFixed(2)}</td>
      <td>{props.playerStats.winPercentage.toFixed(2)}%</td>
      <td>{props.playerStats.demosFor}</td>
      <td>{props.playerStats.demosAgainst}</td>
    </tr>
  );
}
