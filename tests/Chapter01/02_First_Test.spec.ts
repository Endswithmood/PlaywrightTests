// Import playwright module
import { test, expect } from '@playwright/test';


test('My Playwright TypeScript Test', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByLabel('Search', { exact: true }).fill('playwright');
    await page.getByLabel('Search', { exact: true }).press('Enter');

    // Click on playlist
    await page.getByRole('link', { name: 'Playwright' }).first().click();

    // Validate web page title 
    await expect(page).toHaveTitle('Playwright by');
});