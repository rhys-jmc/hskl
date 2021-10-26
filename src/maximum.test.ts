import { maximum } from "./maximum";

test("maximum", () => {
  expect(maximum([1, 9, 2, 3, 4] as const)).toBe(9);
});
