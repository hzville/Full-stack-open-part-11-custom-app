import { StringOrNumber } from "../types.js";

export const parseValue = (value: StringOrNumber): number | null => {
  if (
    value == null ||
    isNaN(Number(value)) ||
    (typeof value === "string" && value.trim() === "")
  ) {
    return null;
  }
  return typeof value === "string" ? parseInt(value) : value;
};
