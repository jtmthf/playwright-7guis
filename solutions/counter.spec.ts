import { test, expect } from "@playwright/test";

test("can increment then reset counter", async ({ page }) => {
  await page.goto("https://seven-guis.netlify.app/counter");

  // Increment the counter
  await page.getByRole("button", { name: "Increment" }).click();

  // Check the counter value
  await expect(page.getByLabel("Count")).toHaveValue("1");

  // Increment the counter again
  await page.getByRole("button", { name: "Increment" }).click();

  // Check the counter value
  await expect(page.getByLabel("Count")).toHaveValue("2");

  // Reset the counter
  await page.getByRole("button", { name: "Reset" }).click();

  // Check the counter value
  await expect(page.getByLabel("Count")).toHaveValue("0");
});
