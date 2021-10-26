import { NonEmptyList } from "./types";

export function max<N extends number>(...numbers: NonEmptyList<N>): N {
  return Math.max(...numbers) as N;
}
