import { List } from "./types";

export function range(min: string, max: string): string;
export function range(min: number, max: number): List<number>;
export function range<T>(min: number | string, max: number | string): List<number> | string {
  if (typeof min === "number" || typeof max === "number") {
    if (typeof min !== "number" || typeof max !== "number") throw new Error("min and max must be same type");
    return generateRange(min, max);
  }

  if (min.length !== 1 || max.length !== 1) throw new Error("min and max string must be single char");

  const minChar = min[0] as string;
  const maxChar = max[0] as string;
  const minCode = minChar.charCodeAt(0);
  const maxCode = maxChar.charCodeAt(0);
  const charCodes = generateRange(minCode, maxCode);

  return Array.from(charCodes, (code) => String.fromCharCode(code)).join("");
}

const generateRange = (min: number, max: number) => {
  const length = max - min + 1;
  if (length < 0) throw new Error("max must be larger than min");
  return Array.from({ length }, (_, index) => min + index);
};
