import { length } from "./length";

test("length", () => {
  expect(length([5, 4, 3, 2, 1] as const)).toBe(5);
});
