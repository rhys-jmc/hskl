import { min } from "./min";

test("min", () => {
  expect(min(9, 10)).toBe(9);
  expect(min(3.4, 3.2)).toBe(3.2);
});
