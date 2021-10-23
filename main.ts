/**
 *
 */
import { Drop, EmptyList, Head, Init, Last, List, NonEmptyList, Reverse, Succ, Tail, Take } from "./types";

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

export function take<E extends number, L extends List>(extract: E, list: L): Take<E, L> {
  return list.slice(0, extract) as Take<E, L>;
}

export function drop<N extends number, L extends List>(number: N, array: L): Drop<N, L> {
  return array.slice(number) as Drop<N, L>;
}

export function succ<N extends number>(number: N): Succ<N> {
  return (number + 1) as Succ<N>;
}

export function min<N extends number>(...numbers: NonEmptyList<N>): N {
  return Math.min(...numbers) as N;
}

export function max<N extends number>(...numbers: NonEmptyList<N>): N {
  return Math.max(...numbers) as N;
}

export function minimum<N extends number>(numbers: NonEmptyList<N>): N {
  return min(...numbers);
}

export function maximuum<N extends number>(numbers: NonEmptyList<N>): N {
  return max(...numbers);
}

export function sum<N extends number>(numbers: NonEmptyList<N>): number {
  return numbers.reduce<number>((p: number, c: N): number => p + c, 0);
}

export function product<N extends number>(numbers: NonEmptyList<N>): number {
  return numbers.reduce<number>((p: number, c: N): number => p * c, 1);
}

export function elem<T, L extends List<T>>(thing: T, list: L): boolean {
  return list.some((item): boolean => isEqual(item, thing));
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

const u = succ(3);

const v = min(4, 7, 3);

const w = max(4, 7, 3);

const x = minimum([4, 7, 3]);

const y = maximuum([4, 7, 3]);

const z = sum([4, 7, 3]);

const aa = product([4, 7, 3]);

const ab = elem({ b: 1, a: 2 }, [{ a: 2, b: 1 }]);

// https://github.com/epoberezkin/fast-deep-equal/blob/a33d49ab5cc659e331ff445109f35dd323230d41/src/index.jst
function isEqual(a: unknown, b: unknown) {
  if (a === b) return true;

  if (a && b && typeof a === "object" && typeof b === "object") {
    if (Array.isArray(a) || Array.isArray(b)) {
      if (!Array.isArray(a)) return false;
      if (!Array.isArray(b)) return false;
      if (a.length !== b.length) return false;

      for (let i = a.length; i-- !== 0; ) if (!isEqual(a[i], b[i])) return false;

      return true;
    }

    if (a instanceof RegExp || b instanceof RegExp) {
      if (!(a instanceof RegExp)) return false;
      if (!(b instanceof RegExp)) return false;

      return a.source === b.source && a.flags === b.flags;
    }

    if (a.valueOf !== Object.prototype.valueOf || b.valueOf !== Object.prototype.valueOf) {
      if (a.valueOf === Object.prototype.valueOf) return false;
      if (b.valueOf === Object.prototype.valueOf) return false;

      return a.valueOf() === b.valueOf();
    }

    if (a.toString !== Object.prototype.toString || b.toString !== Object.prototype.toString) {
      if (a.toString === Object.prototype.toString) return false;
      if (b.toString === Object.prototype.toString) return false;

      return a.toString() === b.toString();
    }

    const keys = Object.keys(a);
    const length = keys.length;

    if (length !== Object.keys(b).length) return false;

    for (let i = length; i-- !== 0; ) {
      const key = keys[i];

      if (key && !Object.prototype.hasOwnProperty.call(b, key)) return false;
    }

    for (let i = length; i-- !== 0; ) {
      const key = keys[i];

      if (key && !isEqual((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a !== a && b !== b;
}
