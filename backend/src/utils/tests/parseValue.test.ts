import { parseValue } from "../parseValue.js";

describe("parse integers", () => {
  test("parse integer 1", () => {
    expect(parseValue(1)).toBe(1);
  });

  test("parse integer 999", () => {
    expect(parseValue(999)).toBe(999);
  });

  test("parse negative integer -5", () => {
    expect(parseValue(-5)).toBe(-5);
  });

  test("parse negative integer -222", () => {
    expect(parseValue(-222)).toBe(-222);
  });
});

describe("parse strings", () => {
  test("parse integer 4 as string", () => {
    expect(parseValue("4")).toBe(4);
  });

  test("parse integer 555 as string", () => {
    expect(parseValue("555")).toBe(555);
  });

  test("parse negative integer -7 as string", () => {
    expect(parseValue("-7")).toBe(-7);
  });

  test("parse negative integer -888 as string", () => {
    expect(parseValue("-888")).toBe(-888);
  });

  test("parse string one", () => {
    expect(parseValue("one")).toBe(null);
  });

  test("parse empty string", () => {
    expect(parseValue("")).toBe(null);
  });

  test("parse whitespace", () => {
    expect(parseValue(" ")).toBe(null);
  });
});
