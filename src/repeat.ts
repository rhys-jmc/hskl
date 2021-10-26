import { List } from "./types";

export function repeat<T>(item: T): (count: number) => List<T> {
  return (count: number): List<T> => Array.from({ length: count }, () => item);
}
