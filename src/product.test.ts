import { product } from "./product";

test("product", () => {
  expect(product([6, 2, 1, 2] as const)).toBe(24);
  expect(product([1, 2, 5, 6, 7, 9, 2, 0] as const)).toBe(0);
});
