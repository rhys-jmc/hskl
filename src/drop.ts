import { List, Take } from "./types";

export function drop<N extends number, L extends List>(number: N, list: L): Drop<N, L> {
  return list.slice(number) as Drop<N, L>;
}

type Drop<N extends number, L extends List> = L extends readonly [...Take<N, L>, ...infer R] ? R : L;
