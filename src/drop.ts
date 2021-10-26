import { List, Take } from "./types";

export function drop<N extends number, L extends List>(number: N, array: L): Drop<N, L> {
  return array.slice(number) as Drop<N, L>;
}

type Drop<N extends number, L extends List> = L extends readonly [...Take<N, L>, ...infer R] ? R : L;
