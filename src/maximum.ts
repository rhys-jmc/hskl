import { max } from "./max";
import { NonEmptyList } from "./types";

export function maximuum<N extends number>(numbers: NonEmptyList<N>): N {
  return max(...numbers);
}
