export type List<T = unknown> = readonly T[];
export type EmptyList = readonly [];
export type NonEmptyList<T = unknown, R extends List = List<T>> = readonly [T, ...R];

export type Dec<L extends List | string> = L extends readonly [...infer R, unknown] ? R : never;
export type Inc<L extends List | string> = L extends List<infer T> ? [...L, T] : never;

export type Take<E extends number, L extends List | string> = E extends L["length"] ? L : Take<E, Dec<L>>;
