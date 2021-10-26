import { List, Take } from "./types";

export function take(extract: number, fn: (extract: number) => string): string;
export function take<T, L extends List<T>>(extract: number, fn: (extract: number) => List<T>): List<T>;
export function take<T, E extends number, L extends List<T>>(extract: E, list: L): Take<E, L>;
export function take<T, E extends number, L extends List<T> | string>(
  extract: E,
  list: L | ((extract: number) => L | string)
): typeof list extends Function ? L : Take<E, L> {
  return (
    typeof list === "function" ? list(extract) : (list.slice(0, extract) as Take<E, L>)
  ) as typeof list extends Function ? L : Take<E, L>;
}
