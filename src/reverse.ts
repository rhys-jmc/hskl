import { List, NonEmptyList, Take } from "./types";

export function reverse<T, L extends List<T>>(
  list: L
): L["length"] extends SupportedReverseLengths ? Reverse<L> : List<T> {
  return [...list].reverse() as any;
}

type Append<A, L extends List> = readonly [...L, A];
type Reverse<L extends List> = L extends NonEmptyList<infer T, infer R> ? Append<T, Reverse<R>> : L;

// prettier-ignore
type SupportedReverseLengths = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22;
