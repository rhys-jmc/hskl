import { isEmpty } from "./is-empty";
import { EmptyList, NonEmptyList, List } from "./types";

// may as well do the inverse to allow type assertion
export function isNotEmpty(list: EmptyList): false;
export function isNotEmpty(list: NonEmptyList): true;
export function isNotEmpty<T>(list: List<T>): list is NonEmptyList<T>;
export function isNotEmpty<T>(list: List<T>): list is NonEmptyList<T> {
  return !isEmpty(list);
}
