import { init } from "./init";

test("init", () => {
  expect(init([5, 4, 3, 2, 1])).toEqual([5, 4, 3, 2]);
});
