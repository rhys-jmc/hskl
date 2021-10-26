import { isEmpty } from "./is-empty";

test("isEmpty", () => {
  expect(isEmpty([1, 2, 3] as const)).toBe(false);
  expect(isEmpty([] as const)).toBe(true);
});
