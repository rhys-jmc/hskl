import { NonEmptyList } from "./types";

export function head<T, L extends NonEmptyList<T>>(list: L): Head<L> {
  return list[0];
}

type Head<L extends NonEmptyList> = L[0];
