import { isNotEmpty } from "./is-not-empty";

test("isNotEmpty", () => {
  expect(isNotEmpty([1, 2, 3])).toBe(true);
  expect(isNotEmpty([])).toBe(false);
});
