import { init } from "./init";

test("init", () => {
  expect(init([5, 4, 3, 2, 1] as const)).toEqual([5, 4, 3, 2]);
});
