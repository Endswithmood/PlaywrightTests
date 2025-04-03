import { test, expect } from '@playwright/test';


test('Codegen test case', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('playwright');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'Playwright' }).click();
  await page.locator('video').click();
  await expect(page.getByRole('link', { name: 'Playwright' })).toBeVisible();
});