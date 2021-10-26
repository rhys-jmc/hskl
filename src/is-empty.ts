import { length } from "./length";
import { EmptyList, NonEmptyList, List } from "./types";

// acts like `null` fn
export function isEmpty(array: EmptyList): false;
export function isEmpty(array: NonEmptyList): true;
export function isEmpty(array: List): array is EmptyList;
export function isEmpty(array: List): array is EmptyList {
  return length(array) === 0;
}
