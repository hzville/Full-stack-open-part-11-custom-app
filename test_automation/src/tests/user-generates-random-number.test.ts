import { test, expect } from "@playwright/test";
import { UserOpensMainPage } from "../keywords/openPage";
import { describe } from "node:test";

describe("user enters valid inputs", () => {
  test(`user inputs 1 and 10, clicks generate button, 
    random number is visible`, async ({ page }) => {
    await UserOpensMainPage(page);
    await page.getByTestId("min-input").locator("input").fill("1");
    await page.getByTestId("max-input").locator("input").fill("10");
    await page.getByTestId("generate-button").click();
    await expect(page.getByTestId("animated-number")).toBeVisible();
  });
});

describe("user enters invalid inputs", () => {
  test(`user leaves input fields empty and clicks generate button, 
   no random number is generated`, async ({ page }) => {
    await UserOpensMainPage(page);
    const generateButton = page.getByTestId("generate-button");
    await expect(generateButton).toBeDisabled();
    await generateButton.click({ force: true });
    await expect(page.getByTestId("animated-number")).not.toBeVisible();
  });
  test(`user leaves min-input empty and clicks generate button, 
    no random number is generated`, async ({ page }) => {
    await UserOpensMainPage(page);
    await page.getByTestId("max-input").locator("input").fill("1");
    const generateButton = page.getByTestId("generate-button");
    await expect(generateButton).toBeDisabled();
    await generateButton.click({ force: true });
    await expect(page.getByTestId("animated-number")).not.toBeVisible();
  });
  test(`user leaves max-input empty and clicks generate button, 
    no random number is generated`, async ({ page }) => {
    await UserOpensMainPage(page);
    await page.getByTestId("min-input").locator("input").fill("2");
    const generateButton = page.getByTestId("generate-button");
    await expect(generateButton).toBeDisabled();
    await generateButton.click({ force: true });
    await expect(page.getByTestId("animated-number")).not.toBeVisible();
  });
  test(`user enter letters to input and clicks generate button, 
    no random number is generated`, async ({ page }) => {
    await UserOpensMainPage(page);

    try {
      await page.getByTestId("min-input").locator("input").fill("abc");
      await page.getByTestId("max-input").locator("input").fill("efg");
    } catch (error) {
      console.log("input should not accept letters");
    }
    await expect(page.getByTestId("min-input").locator("input")).toBeEmpty();
    await expect(page.getByTestId("max-input").locator("input")).toBeEmpty();

    const generateButton = page.getByTestId("generate-button");
    await expect(generateButton).toBeDisabled();
    await generateButton.click({ force: true });

    await expect(page.getByTestId("animated-number")).not.toBeVisible();
  });
});
