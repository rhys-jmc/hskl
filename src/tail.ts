import { List } from "./types";

export function tail<T, L extends List<T>>(list: L): Tail<L> {
  return list.slice(1) as Tail<L>;
}

type Tail<L extends List> = L extends readonly [unknown, ...infer R] ? R : L;
