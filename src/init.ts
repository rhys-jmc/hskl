import { List } from "./types";

export function init<T, L extends List<T>>(list: L): Init<L> {
  return list.slice(0, -1) as Init<L>;
}

type Init<L extends List> = L extends readonly [...infer R, unknown] ? R : L;
