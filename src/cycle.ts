import { List } from "./types";

export function cycle(text: string): (extract: number) => string;
export function cycle<T, L extends List<T>>(list: List<T>): (extract: number) => List<T>;
export function cycle<T, L extends List<T>>(list: L | string): (extract: number) => List<T> | string {
  return (extract: number): List<T> =>
    typeof list === "string"
      ? Array.from({ length: extract }, (_, index): string => list[index % list.length] as string).join("")
      : (Array.from({ length: extract }, (_, index): T => list[index % list.length] as T) as any);
}
