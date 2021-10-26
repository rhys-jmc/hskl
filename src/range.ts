import { List } from "./types";

export function range(min: number, max: number): List<number> {
  const length = max - min + 1;
  if (length < 0) throw new Error("max must be larger than min");
  return Array.from({ length }, (_, index) => min + index);
}
