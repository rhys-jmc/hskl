import { tail } from "./tail";

test("tail", () => {
  expect(tail([5, 4, 3, 2, 1] as const)).toEqual([4, 3, 2, 1]);
});
