import { last } from "./last";

test("last", () => {
  expect(last([5, 4, 3, 2, 1] as const)).toBe(1);
});
