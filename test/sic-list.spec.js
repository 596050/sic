import { getDescription } from "../sic-list";

describe("getDescription", () => {
  test("returns description for given code", () => {
    const code = "20160";
    const description = "Manufacture of plastics in primary forms";
    expect(getDescription(code)).toBe(description);
  });
});
