export type StringOrNumber = string | number;

export interface MinMaxNumbers {
  min: StringOrNumber;
  max: StringOrNumber;
}

export type RandomNumberResponse = { randomNumber: number } | { error: string };
