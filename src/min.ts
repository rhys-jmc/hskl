import { NonEmptyList } from "./types";

export function min<N extends number>(...numbers: NonEmptyList<N>): N {
  return Math.min(...numbers) as N;
}
