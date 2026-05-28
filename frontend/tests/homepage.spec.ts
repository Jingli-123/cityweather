import { test, expect } from "@playwright/test";

test("homepage loads", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page.locator("body")).toBeVisible();
});

test("page has correct title", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle(/Realtime City Weather/i);
});

test("navbar has Home button", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page.getByText("Home")).toBeVisible();
});

test("navbar has City Map button", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page.getByText("City Map")).toBeVisible();
});

test("navbar has Sign In button", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page.getByText("Sign In")).toBeVisible();
});