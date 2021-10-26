import { take } from "./take";

test("take", () => {
  expect(take(3, [5, 4, 3, 2, 1])).toEqual([5, 4, 3]);
  expect(take(1, [3, 9, 3])).toEqual([3]);
  expect(take(5, [1, 2])).toEqual([1, 2]);
  expect(take(0, [6, 6, 6])).toEqual([]);
});
