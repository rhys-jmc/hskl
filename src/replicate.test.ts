import { replicate } from "./replicate";

test("replicate", () => {
  expect(replicate(3, 10)).toEqual([10, 10, 10]);
});
