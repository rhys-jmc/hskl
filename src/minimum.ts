import { min } from "./min";
import { NonEmptyList } from "./types";

export function minimum<N extends number>(numbers: NonEmptyList<N>): N {
  return min(...numbers);
}
