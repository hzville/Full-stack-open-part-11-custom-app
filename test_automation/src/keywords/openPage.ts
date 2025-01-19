import { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export const UserOpensMainPage = async (page: Page) => {
  await page.goto("http://localhost:3000/");
  const header = page.getByTestId("header");
  await expect(header).toHaveText(
    "Enter min and max to generate a random number"
  );
  await expect(page.getByTestId("min-input")).toBeVisible();
  await expect(page.getByTestId("max-input")).toBeVisible();
  await expect(page.getByTestId("generate-button")).toBeVisible();
};
