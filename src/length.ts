import { List } from "./types";

export function length<L extends List>(list: L): L["length"] {
  return list.length;
}
