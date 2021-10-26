import { elem } from "./elem";

test("elem", () => {
  expect(elem(4, [3, 4, 5, 6] as const)).toBe(true);
  expect(elem(10, [3, 4, 5, 6] as const)).toBe(false);
});
