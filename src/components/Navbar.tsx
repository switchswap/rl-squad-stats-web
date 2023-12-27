import { JSXElement, createResource } from "solid-js";
import { getTotalGamesPlayed } from "../network/Queries";

export function NavBar(): JSXElement {
  const [totalGamesPlayed] = createResource<number, boolean>(true, getTotalGamesPlayed);

  return (
    <div class="navbar bg-primary rounded-xl mb-6">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost text-xl">
          Nap Gang RL Stats
        </a>
      </div>
      <div class="flex-none mr-2">
        <p>Games Played: {totalGamesPlayed()}</p>
      </div>
    </div>
  );
}
