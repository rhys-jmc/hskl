import { minimum } from "./minimum";

test("minimum", () => {
  expect(minimum([8, 4, 2, 1, 5, 6] as const)).toBe(1);
});
