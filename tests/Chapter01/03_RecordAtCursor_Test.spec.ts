// Import playwright module
import { test, expect } from '@playwright/test';


test('Record at cursor test', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByLabel('Search', { exact: true }).fill('playwright');
    await page.getByLabel('Search', { exact: true }).press('Enter');

    // Click on playlist
    await page.getByRole('link', { name: 'Playwright' }).first().click();

    // Validate web page title 
    await expect(page).toHaveTitle('Playwright');
    
    await expect(page.getByRole('link', { name: 'Playwright' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Playwright API ' })).toBeVisible();
    await expect(page.getByLabel('Playwright').locator('#video-title')).toContainText('Playwright | Playwright Testing');
    await expect(page.getByLabel('Playwright API').locator('#video-title')).toContainText('Playwright API Testing');
});

