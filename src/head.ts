import { List, NonEmptyList } from "./types";

export function head<T, L extends NonEmptyList<T>>(array: L): Head<L> {
  return array[0];
}

type Head<L extends List> = L[0];
