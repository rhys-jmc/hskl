import { isNotEmpty } from "./is-not-empty";

test("isNotEmpty", () => {
  expect(isNotEmpty([1, 2, 3] as const)).toBe(true);
  expect(isNotEmpty([] as const)).toBe(false);
});
