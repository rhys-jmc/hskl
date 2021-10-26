import { cycle } from "./cycle";

test("cycle", () => {
  expect(cycle([1, 2] as const)(3)).toEqual([1, 2, 1]);
  expect(cycle("ab")(3)).toBe("aba");
});
