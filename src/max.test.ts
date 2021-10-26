import { max } from "./max";

test("max", () => {
  expect(max(100, 101)).toBe(101);
  expect(max(5, 4)).toBe(5);
});
