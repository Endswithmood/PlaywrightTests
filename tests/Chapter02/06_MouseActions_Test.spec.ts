// Import playwright module
import { test, expect } from '@playwright/test';

// Write a test
test('Mouse actions in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/search?q=playwright');

    // Left button click
    await page.getByRole('link', { name: 'Playwright ' }).first().click({ button: 'left' });

});

