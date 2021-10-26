import { drop } from "./drop";

test("drop", () => {
  expect(drop(3, [8, 4, 2, 1, 5, 6] as const)).toEqual([1, 5, 6]);
  expect(drop(0, [1, 2, 3, 4] as const)).toEqual([1, 2, 3, 4]);
  expect(drop(100, [1, 2, 3, 4])).toEqual([]);
});
