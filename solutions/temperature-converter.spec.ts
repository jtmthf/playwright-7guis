import { test, expect } from "@playwright/test";

test("can convert from Celsius to Fahrenheit and vice versa", async ({
  page,
}) => {
  await page.goto("https://seven-guis.netlify.app/temperature-converter");
  await page.getByPlaceholder("°C").click();
  await page.getByPlaceholder("°C").fill("100");
  await expect(page.getByPlaceholder("°F")).toHaveValue("212");
  await page.getByPlaceholder("°F").click();
  await page.getByPlaceholder("°F").fill("32");
  await expect(page.getByPlaceholder("°C")).toHaveValue("0");
  await page.getByRole("button", { name: "Reset" }).click();
  await expect(page.getByPlaceholder("°C")).toBeEmpty();
  await expect(page.getByPlaceholder("°F")).toBeEmpty();
});
