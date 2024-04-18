import { expect, test } from "@playwright/test";

test("can book a one-way flight", async ({ page }) => {
  await page.goto("https://seven-guis.netlify.app/flight-booker");
  await page.locator("#field-11").click();
  await page.getByLabel("Month").first().selectOption("8");
  await page.getByLabel("September 25,").click();
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("Your flight has been booked:")).toBeVisible();
  await page.getByText("Close").click();
});
