import {
  describe,
  test,
  expect,
  vi,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
} from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputMinMax from "../InputMinMax";

describe("Render tests for InputMinMax components ", () => {
  beforeAll(() => {
    const mockFn = vi.fn();
    render(<InputMinMax setGeneratedNumber={mockFn} />);
  });
  afterAll(() => {
    cleanup();
  });
  test("renders header correctly", () => {
    const element = screen.getByTestId("header");
    expect(element.textContent).toBe(
      "Enter min and max to generate a random number"
    );
  });
  test("renders min and max input correctly", () => {
    screen.getByTestId("min-input");
    screen.getByTestId("max-input");
  });
  test("renders generate button correctly", () => {
    const element = screen.getByTestId("generate-button");
    expect(element.textContent).toBe("Generate");
  });
});

describe("Test min-max input and generated button", async () => {
  const mockFn = vi.fn();
  beforeEach(() => {
    render(<InputMinMax setGeneratedNumber={mockFn} />);
  });
  afterEach(() => {
    cleanup();
  });
  test("min and max input empty, generate button disabled", async () => {
    screen.getByTestId("min-input");
    screen.getByTestId("max-input");
    const generateButton = screen.getByTestId("generate-button");
    expect(generateButton).toHaveProperty("disabled", true);
  });
  test("min input empty, generate button disabled", async () => {
    const user = userEvent.setup();
    screen.getByTestId("min-input");
    const inputMax = screen.getByTestId("max-input");
    const generateButton = screen.getByTestId("generate-button");
    await user.type(inputMax, "5");
    expect(generateButton).toHaveProperty("disabled", true);
  });
  test("max input empty, generate button disabled", async () => {
    const user = userEvent.setup();
    const inputMin = screen.getByTestId("min-input");
    screen.getByTestId("max-input");
    const generateButton = screen.getByTestId("generate-button");
    await user.type(inputMin, "6");
    expect(generateButton).toHaveProperty("disabled", true);
  });
  test("min and max value given, generate button called", async () => {
    const user = userEvent.setup();
    const inputMin = screen.getByTestId("min-input");
    const inputMax = screen.getByTestId("max-input");
    const generateButton = screen.getByTestId("generate-button");
    await user.type(inputMin, "7");
    await user.type(inputMax, "8");
    expect(generateButton).toHaveProperty("disabled", false);
  });
});
