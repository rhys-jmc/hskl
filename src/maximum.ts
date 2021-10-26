import { max } from "./max";
import { NonEmptyList } from "./types";

export function maximum<N extends number>(numbers: NonEmptyList<N>): N {
  return max(...numbers);
}
