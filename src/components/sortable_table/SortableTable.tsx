import { Accessor, createSignal, For, JSXElement, Show } from "solid-js";
import { ColumnDetails } from "./ColumnDetails";
import { FaSolidSortDown, FaSolidSortUp, FaSolidSort } from "solid-icons/fa";

export interface TableRowProps<T> {
  position: Accessor<number>;
  data: T;
}

export interface SortableTableProps<T> {
  data: T[];
  dataMap: Record<keyof T, ColumnDetails>;
  tableRow: (props: TableRowProps<T>) => JSXElement;
  firstColumnLabel?: string;
  initialSortField?: keyof T;
  sortData?: <K extends keyof T>(data: T[], sortField: K, sortDescending: boolean) => T[];
}

export function SortableTable<T>(props: SortableTableProps<T>): JSXElement {
  const [sortField, setSortField] = createSignal(props.initialSortField ?? Object.keys(props.dataMap)[0]);
  const [sortDescending, setSortDescending] = createSignal(false);

  function onHeaderClick(newSortField: string) {
    // If sorting by the same thing, toggle sort order
    if (newSortField === sortField()) {
      setSortDescending(!sortDescending());
      return;
    }

    setSortDescending(true);
    setSortField(newSortField);
  }

  function sortData<K extends keyof T>(data: T[], sortField: K, sortDescending: boolean): T[] {
    if (props.sortData !== undefined) {
      return props.sortData(data, sortField, sortDescending);
    }

    return [...data].sort((a, b) => {
      const valueA = a[sortField];
      const valueB = b[sortField];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortDescending ? valueB.localeCompare(valueA) : valueA.localeCompare(valueB);
      }

      return sortDescending ? Number(valueB) - Number(valueA) : Number(valueA) - Number(valueB);
    });
  }

  return (
    <div class="overflow-auto">
      <table class="table table-pin-rows">
        <thead>
          <tr>
            <Show when={props.firstColumnLabel !== undefined}>
              <th>{props.firstColumnLabel}</th>
            </Show>
            <For each={Object.keys(props.dataMap) as (keyof T)[]}>
              {(key) => {
                return (
                  <th>
                    <span
                      class="select-none"
                      title={props.dataMap[key].summary}
                      onClick={() => onHeaderClick(key.toString())}
                    >
                      <div class="flex items-center align-bottom gap-1">
                        <p>{props.dataMap[key].title}</p>
                        <div>
                          {sortField() === key ? (
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
            each={sortData(props.data, sortField() as keyof T, sortDescending())}
            fallback={
              <tr>
                <th>Loading...</th>
              </tr>
            }
          >
            {(item, index) => props.tableRow({ position: index, data: item })}
          </For>
        </tbody>
      </table>
    </div>
  );
}
