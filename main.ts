/**
 *
 */
import { EmptyList, Head, List, NonEmptyList, Reverse, Take } from "./types";

export function head<T, L extends List<T>>(array: L): Head<L> {
  const first = array[0];
  if (!first) throw new Error("empty list");
  return first as Head<L>;
}

export function length<L extends List>(array: L): L["length"] {
  return array.length;
}

export function isEmpty(array: EmptyList): false;
export function isEmpty(array: NonEmptyList): true;
export function isEmpty(array: List): array is EmptyList;
export function isEmpty(array: List): array is EmptyList {
  return length(array) === 0;
}

export function isNotEmpty<T>(array: NonEmptyList<T>): true;
export function isNotEmpty(array: EmptyList): false;
export function isNotEmpty<T>(array: readonly T[]): array is NonEmptyList<T>;
export function isNotEmpty<T>(array: readonly T[]): array is NonEmptyList<T> {
  return !isEmpty(array);
}

export function reverse<L extends List>(array: L): Reverse<L> {
  return [...array].reverse() as unknown as Reverse<L>;
}

export function take<E extends number, L extends List>(extract: E, array: L): Take<E, L> {
  return array.slice(0, extract) as Take<E, L>;
}

const numArr: readonly (number | string)[] = [1, "2"];
const constArr = [1, "2"] as const;

const a = head(numArr);
const b = head(constArr);

const c = length(numArr);
const d = length(constArr);

const e = isEmpty(numArr);
const f = isEmpty(constArr);
