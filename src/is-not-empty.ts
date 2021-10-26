import { isEmpty } from "./is-empty";
import { EmptyList, NonEmptyList, List } from "./types";

// may as well do the inverse to allow type assertion
export function isNotEmpty(array: EmptyList): false;
export function isNotEmpty(array: NonEmptyList): true;
export function isNotEmpty<T>(array: List<T>): array is NonEmptyList<T>;
export function isNotEmpty<T>(array: List<T>): array is NonEmptyList<T> {
  return !isEmpty(array);
}
