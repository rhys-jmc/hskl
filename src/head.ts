import { List } from "./types";

export function head<T, L extends List<T>>(array: L): Head<L> {
  const first = array[0];
  if (!first) throw new Error("empty list");
  return first as Head<L>;
}

type Head<L extends List> = L[0];
