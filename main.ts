/**
 *
 */
import { Drop, EmptyList, Head, Init, Last, List, NonEmptyList, Reverse, Tail, Take } from "./types";

export function head<T, L extends List<T>>(array: L): Head<L> {
  const first = array[0];
  if (!first) throw new Error("empty list");
  return first as Head<L>;
}

export function tail<T, L extends List<T>>(array: L): Tail<L> {
  return array.slice(1) as Tail<L>;
}

export function last<T, L extends List<T>>(array: L): Last<L> {
  const foot = array[array.length - 1];
  if (!foot) throw new Error("empty list");
  return foot;
}

export function init<T, L extends List<T>>(array: L): Init<L> {
  return array.slice(0, -1) as Init<L>;
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

export function isNotEmpty(array: EmptyList): false;
export function isNotEmpty(array: NonEmptyList): true;
export function isNotEmpty<T>(array: List<T>): array is NonEmptyList<T>;
export function isNotEmpty<T>(array: List<T>): array is NonEmptyList<T> {
  return !isEmpty(array);
}

export function reverse<L extends List>(array: L): Reverse<L> {
  return [...array].reverse() as unknown as Reverse<L>;
}

export function take<E extends number, L extends List>(extract: E, array: L): Take<E, L> {
  return array.slice(0, extract) as Take<E, L>;
}

export function drop<N extends number, L extends List>(number: N, array: L): Drop<N, L> {
  return array.slice(number) as Drop<N, L>;
}

const numArr: readonly (number | string)[] = [1, 1.5, "2"];
const constArr = [1, 1.5, "2"] as const;

const a = head(numArr);
const b = head(constArr);

const c = length(numArr);
const d = length(constArr);

const e = isEmpty(numArr);
const f = isEmpty(constArr);

const g = isNotEmpty(numArr);
const h = isNotEmpty(constArr);

const i = reverse(numArr);
const j = reverse(constArr);

const k = take(2, numArr);
const l = take(2, constArr);

const m = tail(numArr);
const n = tail(constArr);

const o = last(numArr);
const p = last(constArr);

const q = init(numArr);
const r = init(constArr);

const s = drop(2, numArr);
const t = drop(2, constArr);
