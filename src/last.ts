import { Dec, NonEmptyList } from "./types";

export function last<T, L extends NonEmptyList<T>>(array: L): Last<L> {
  return array[array.length - 1] as T;
}

type Last<L extends NonEmptyList> = L[Dec<L>["length"]];
