import { isEmpty } from "./is-empty";

test("isEmpty", () => {
  expect(isEmpty([1, 2, 3])).toBe(false);
  expect(isEmpty([])).toBe(true);
});
