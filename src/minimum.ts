import { isNotEmpty } from "./is-not-empty";
import { min } from "./min";
import { List } from "./types";

export function minimum<N extends number>(numbers: List<N>): N {
  if (!isNotEmpty(numbers)) throw new Error("empty list");
  return min(...numbers);
}
