import { head } from "./head";

test("head", () => {
  expect(head([5, 4, 3, 2, 1])).toBe(5);
});
