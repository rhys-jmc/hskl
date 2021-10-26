import { List } from "./types";

export function range(min: string, max: string): string;
export function range(min: number, max: number): List<number>;
export function range<T>(min: number | string, max: number | string): List<number> | string {
  if (typeof min === "number" || typeof max === "number") {
    if (typeof min !== "number" || typeof max !== "number") throw new Error("min and max must be same type");
    return generateRange(min, max);
  }

  if (![min, max].every(stringIsChar)) throw new Error("min and max string must be single char");

  const chars = ([min, max] as const).map((c) => c.charCodeAt(0)) as [number, number];

  return Array.from(generateRange(...chars), (code) => String.fromCharCode(code)).join("");
}

const generateRange = (min: number, max: number) => {
  const length = max - min + 1;
  if (length < 0) throw new Error("max must be larger than min");
  return Array.from({ length }, (_, index) => min + index);
};

const stringIsChar = (text: string) => text.length === 1;
