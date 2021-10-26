import { range } from "./range";

describe("range", () => {
  test("number", () => {
    expect(range(1, 20)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
});
