import { List, NonEmptyList, Take } from "./types";

type Reverse<L extends List> = L extends NonEmptyList<infer T, infer R> ? Append<T, Reverse<R>> : L;
export function reverse<L extends List>(array: L): Take<22, L> extends L ? Reverse<L> : L[number][] {
  return [...array].reverse() as any;
}

type Append<A, L extends List> = readonly [...L, A];
