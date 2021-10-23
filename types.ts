type Append<A, L extends List> = readonly [...L, A];
type Prepend<P, L extends List> = readonly [P, ...L];

type First<T, R extends List<T>> = readonly [T, ...R];
type Last<T, R extends List<T>> = readonly [...R, T];

type Succ<L extends List> = L extends List<infer T> ? [...L, T] : never;
type Pred<L extends List> = L extends Last<unknown, infer R> ? R : never;

export type List<T = unknown> = readonly T[];

export type EmptyList = readonly [];

export type NonEmptyList<T = unknown, R extends List = List<T>> = readonly [T, ...R];

export type Reverse<L extends List> = L extends NonEmptyList<infer T, infer R> ? Append<T, Reverse<R>> : L;

export type Take<E extends number, L extends List> = E extends L["length"] ? L : Take<E, Pred<L>>;

export type Head<L extends List> = L[0];

export type Tail<L extends List> = Exclude<L[number], L[0]>;
