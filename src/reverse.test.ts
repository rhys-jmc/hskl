import { reverse } from "./reverse";

test("reverse", () => {
  expect(reverse([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});
