import { List, NonEmptyList, Take } from "./types";

export function reverse<L extends List>(list: L): Take<22, L> extends L ? Reverse<L> : L[number][] {
  return [...list].reverse() as any;
}

type Append<A, L extends List> = readonly [...L, A];
type Reverse<L extends List> = L extends NonEmptyList<infer T, infer R> ? Append<T, Reverse<R>> : L;
