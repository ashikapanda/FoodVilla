import { sum } from "../sum";
test("sum of 2 positive arguments", () => {
  expect(sum(2, 5)).toBe(7);
});
