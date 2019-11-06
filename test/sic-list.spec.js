import {
  getCode,
  getCodes,
  getCodeList,
  getDescription,
  getDescriptions,
  getDescriptionList,
  overwrite
} from "../sic-list";

import data from "../data.json";

describe("getCode", () => {
  test("returns code for given description", () => {
    const result = "43390";
    const description = "Other building completion and finishing";
    expect(getCode(description)).toBe(result);
  });

  test("returns undefined for invalid description", () => {
    const result = undefined;
    // invalid description
    const description = "01101000 01100101 01101100 01101100 01101111";
    expect(getCode(description)).toBe(result);
  });
});

describe("getCodes", () => {
  test("returns codes", () => {
    const result = data.map(item => item.code);
    expect(JSON.stringify(getCodes())).toBe(JSON.stringify(result));
  });
});

describe("getCodeList", () => {
  test("returns code to descriptions map", () => {
    const result = data.reduce(
      (acc, datum) => ({ ...acc, ...{ [datum.code]: datum.description } }),
      {}
    );
    expect(JSON.stringify(getCodeList())).toBe(JSON.stringify(result));
  });
});

describe("getDescription", () => {
  test("returns description for given code of type string", () => {
    const code = "20160";
    const result = "Manufacture of plastics in primary forms";
    expect(getDescription(code)).toBe(result);
  });
});

describe("getDescriptions", () => {
  test("returns descriptions", () => {
    const result = data.map(item => item.description);
    expect(JSON.stringify(getDescriptions())).toBe(JSON.stringify(result));
  });
});

describe("getDescriptionList", () => {
  test("returns description for given code", () => {
    const result = data.reduce(
      (acc, datum) => ({
        ...acc,
        ...{ [datum.description.toLowerCase()]: datum.code }
      }),
      {}
    );
    expect(JSON.stringify(getDescriptionList())).toBe(JSON.stringify(result));
  });
});

describe("overwrite", () => {
  test("overwrite description for given codes of type string", () => {
    const code = "01210";
    const oldDescription = "Growing of grapes";
    const newDescription = "Growing of white, red and black grapes";
    const correctedData = [{ code: code, description: newDescription }];
    expect(getDescription(code)).toBe(oldDescription);
    overwrite(correctedData);
    expect(getDescription(code)).toBe(newDescription);
  });
});
