import { test, expect } from "@playwright/test";

test("can increment then reset counter", async ({ page }) => {
  await page.goto("https://seven-guis.netlify.app/counter");

  // Increment the counter

  // Check the counter value

  // Increment the counter again

  // Check the counter value

  // Reset the counter

  // Check the counter value
});
