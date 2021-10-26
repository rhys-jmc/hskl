import { List } from "./types";
import { take } from "./take";
import { repeat } from "./repeat";

export function replicate<T>(extract: number, item: T): List<T> {
  return take(extract, repeat(item));
}
