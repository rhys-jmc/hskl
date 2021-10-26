import { repeat } from "./repeat";

test("repeat", () => {
  expect(repeat(1)(3)).toEqual([1, 1, 1]);
  expect(repeat("a")(3)).toEqual(["a", "a", "a"]);
});
