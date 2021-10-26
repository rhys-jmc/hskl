import { isEqual } from "./helpers";
import { List } from "./types";

export function elem<T, L extends List<T>>(thing: T, list: L): boolean {
  return list.some((item): boolean => isEqual(item, thing));
}
