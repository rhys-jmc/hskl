import { Dec, NonEmptyList } from "./types";

export function last<T, L extends NonEmptyList<T>>(list: L): Last<L> {
  return list[list.length - 1] as T;
}

type Last<L extends NonEmptyList> = L[Dec<L>["length"]];
