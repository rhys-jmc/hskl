// https://github.com/epoberezkin/fast-deep-equal/blob/a33d49ab5cc659e331ff445109f35dd323230d41/src/index.jst
export function isEqual(a: unknown, b: unknown) {
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
