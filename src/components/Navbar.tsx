import { JSXElement, createResource } from "solid-js";
import { getDbInfo } from "../network/Queries";
import { DbInfo } from "../types/DbInfo";

export function NavBar(): JSXElement {
  const [dbInfo] = createResource<DbInfo, boolean>(true, getDbInfo);

  function timestampToHumanReadable(timestampNs: number): string {
    let timestampMs = Math.floor(timestampNs / 1_000_000);
    let date = new Date(timestampMs);
    return date.toLocaleDateString();
  }

  return (
    <div class="navbar bg-primary rounded-xl mb-6">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost text-xl">
          Nap Gang RL Stats
        </a>
      </div>
      <div class="flex-col mr-2">
        <p class="text-lg">Games Played: {dbInfo()?.count}</p>
        <p class="text-xs">Last updated: {timestampToHumanReadable(dbInfo()?.lastUpdatedTimestamp ?? 0)}</p>
      </div>
    </div>
  );
}
