import { cycle } from "./cycle";
import { repeat } from "./repeat";
import { take } from "./take";

describe("take", () => {
  test("list", () => {
    expect(take(3, [5, 4, 3, 2, 1] as const)).toEqual([5, 4, 3]);
    expect(take(1, [3, 9, 3] as const)).toEqual([3]);
    expect(take(5, [1, 2])).toEqual([1, 2]);
    expect(take(0, [6, 6, 6] as const)).toEqual([]);
  });

  test("cycle", () => {
    expect(take(10, cycle([1, 2, 3] as const))).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3, 1]);
    expect(take(12, cycle("LOL "))).toBe("LOL LOL LOL ");
  });

  test("repeat", () => {
    expect(take(10, repeat(5))).toEqual([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);
  });
});
