import { isNotEmpty } from "./is-not-empty";
import { max } from "./max";
import { List } from "./types";

export function maximuum<N extends number>(numbers: List<N>): N {
  if (!isNotEmpty(numbers)) throw new Error("empty list");
  return max(...numbers);
}
