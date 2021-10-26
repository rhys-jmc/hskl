import { List, Take } from "./types";

export function take<E extends number, L extends List>(extract: E, list: L): Take<E, L> {
  return list.slice(0, extract) as Take<E, L>;
}
