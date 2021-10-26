import { List } from "./types";

export function sum<N extends number>(numbers: List<N>): number {
  return numbers.reduce<number>((p: number, c: N): number => p + c, 0);
}
