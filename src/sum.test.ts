import { sum } from "./sum";

test("sum", () => {
  expect(sum([5, 2, 1, 6, 3, 2, 5, 7])).toBe(31);
});
