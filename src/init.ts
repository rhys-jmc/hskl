import { List } from "./types";

export function init<T, L extends List<T>>(array: L): Init<L> {
  return array.slice(0, -1) as Init<L>;
}

type Init<L extends List> = L extends readonly [...infer R, unknown] ? R : L;
