import { length } from "./length";
import { EmptyList, NonEmptyList, List } from "./types";

// acts like `null` fn
export function isEmpty(list: EmptyList): false;
export function isEmpty(list: NonEmptyList): true;
export function isEmpty(list: List): list is EmptyList;
export function isEmpty(list: List): list is EmptyList {
  return length(list) === 0;
}
