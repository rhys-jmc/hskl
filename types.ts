type Append<A, L extends List> = readonly [...L, A];

// type Prepend<P, L extends List> = readonly [P, ...L];

// type First<T, R extends List<T>> = readonly [T, ...R];

// type Last<T, R extends List<T>> = readonly [...R, T];

type Inc<L extends List> = L extends List<infer T> ? [...L, T] : never;

type Dec<L extends List> = L extends readonly [...infer R, unknown] ? R : never;

export type List<T = unknown> = readonly T[];

export type EmptyList = readonly [];

export type NonEmptyList<T = unknown, R extends List = List<T>> = readonly [T, ...R];

export type Reverse<L extends List> = L extends NonEmptyList<infer T, infer R> ? Append<T, Reverse<R>> : L;

export type Take<E extends number, L extends List> = E extends L["length"] ? L : Take<E, Dec<L>>;

export type Head<L extends List> = L[0];

export type Tail<L extends List> = L extends readonly [unknown, ...infer R] ? R : L;

export type Last<L extends List> = L[Dec<L>["length"]];

export type Init<L extends List> = L extends readonly [...infer R, unknown] ? R : L;

export type Drop<N extends number, L extends List> = L extends readonly [...Take<N, L>, ...infer R] ? R : L;

type GetSuccLength<N extends number, L extends List = []> = N extends L["length"]
  ? Inc<L>["length"]
  : GetSuccLength<N, Inc<L>>;

// prettier-ignore
export type Succ<N> = N extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41
  ? GetSuccLength<N>
  : number;

type X = Succ<42>;
