// inspired by: http://learnyouahaskell.com/starting-out

import { isEqual } from "./is-equal";

type Succ<N> = N extends SupportedSuccNumbers ? GetSucc<N> : number;
export function succ<N extends number>(number: N): Succ<N> {
  return (number + 1) as Succ<N>;
}

export function min<N extends number>(...numbers: NonEmptyList<N>): N {
  return Math.min(...numbers) as N;
}

export function max<N extends number>(...numbers: NonEmptyList<N>): N {
  return Math.max(...numbers) as N;
}

type Head<L extends List> = L[0];
export function head<T, L extends List<T>>(array: L): Head<L> {
  const first = array[0];
  if (!first) throw new Error("empty list");
  return first as Head<L>;
}

type Tail<L extends List> = L extends readonly [unknown, ...infer R] ? R : L;
export function tail<T, L extends List<T>>(array: L): Tail<L> {
  return array.slice(1) as Tail<L>;
}

type Last<L extends List> = L[Dec<L>["length"]];
export function last<T, L extends List<T>>(array: L): Last<L> {
  const foot = array[array.length - 1];
  if (!foot) throw new Error("empty list");
  return foot;
}

type Init<L extends List> = L extends readonly [...infer R, unknown] ? R : L;
export function init<T, L extends List<T>>(array: L): Init<L> {
  return array.slice(0, -1) as Init<L>;
}

export function length<L extends List>(array: L): L["length"] {
  return array.length;
}

// acts like `null` fn
export function isEmpty(array: EmptyList): false;
export function isEmpty(array: NonEmptyList): true;
export function isEmpty(array: List): array is EmptyList;
export function isEmpty(array: List): array is EmptyList {
  return length(array) === 0;
}

// may as well do the inverse to allow type assertion
export function isNotEmpty(array: EmptyList): false;
export function isNotEmpty(array: NonEmptyList): true;
export function isNotEmpty<T>(array: List<T>): array is NonEmptyList<T>;
export function isNotEmpty<T>(array: List<T>): array is NonEmptyList<T> {
  return !isEmpty(array);
}

type Append<A, L extends List> = readonly [...L, A];
type Reverse<L extends List> = L extends NonEmptyList<infer T, infer R> ? Append<T, Reverse<R>> : L;
export function reverse<L extends List>(array: L): Take<22, L> extends L ? Reverse<L> : L[number][] {
  return [...array].reverse() as any;
}

type Take<E extends number, L extends List> = E extends L["length"] ? L : Take<E, Dec<L>>;
export function take<E extends number, L extends List>(extract: E, list: L): Take<E, L> {
  return list.slice(0, extract) as Take<E, L>;
}

type Drop<N extends number, L extends List> = L extends readonly [...Take<N, L>, ...infer R] ? R : L;
export function drop<N extends number, L extends List>(number: N, array: L): Drop<N, L> {
  return array.slice(number) as Drop<N, L>;
}

export function minimum<N extends number>(numbers: List<N>): N {
  if (!isNotEmpty(numbers)) throw new Error("empty list");
  return min(...numbers);
}

export function maximuum<N extends number>(numbers: List<N>): N {
  if (!isNotEmpty(numbers)) throw new Error("empty list");
  return max(...numbers);
}

export function sum<N extends number>(numbers: List<N>): number {
  return numbers.reduce<number>((p: number, c: N): number => p + c, 0);
}

export function product<N extends number>(numbers: List<N>): number {
  return numbers.reduce<number>((p: number, c: N): number => p * c, 1);
}

export function elem<T, L extends List<T>>(thing: T, list: L): boolean {
  return list.some((item): boolean => isEqual(item, thing));
}

type List<T = unknown> = readonly T[];
type EmptyList = readonly [];
type NonEmptyList<T = unknown, R extends List = List<T>> = readonly [T, ...R];

type Dec<L extends List> = L extends readonly [...infer R, unknown] ? R : never;
type Inc<L extends List> = L extends List<infer T> ? [...L, T] : never;

type GetSucc<N extends number, L extends List = []> = N extends L["length"] ? Inc<L>["length"] : GetSucc<N, Inc<L>>;

// prettier-ignore
type SupportedSuccNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41;

const x = reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] as const);
