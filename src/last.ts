import { Dec, List } from "./types";

export function last<T, L extends List<T>>(array: L): Last<L> {
  const foot = array[array.length - 1];
  if (!foot) throw new Error("empty list");
  return foot;
}

type Last<L extends List> = L[Dec<L>["length"]];
