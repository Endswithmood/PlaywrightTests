// Import playwright module
import { test, expect } from '@playwright/test';

test.beforeAll(async() => {
    console.log(`Running before all tests...`);
});

test.beforeEach(async( { page }) => {
    console.log(`Running before each tests...`);
    await page.goto('https://www.google.com/');
});

test.afterEach(async() => {
    console.log(`Running after each tests...`);
});

test.afterAll(async() => {
    console.log(`Running after all tests...`);
});

test('Test 1', async ({ page }) => {
    console.log('Test1 execution started...');
    // Go to URL
    // await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByLabel('Search', { exact: true }).fill('playwright');
    await page.getByLabel('Search', { exact: true }).press('Enter');

    // Click on playlist
    await page.getByRole('link', { name: 'Playwright ' }).first().click();

    // Validate web page title 
    await expect(page).toHaveTitle('Playwright - YouTube');
});


test('Test 2', async ({ page }) => {
    console.log('Test2 execution started...');
    // Go to URL
    // await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByLabel('Search', { exact: true }).fill('playwright');
    await page.getByLabel('Search', { exact: true }).press('Enter');

    // Click on playlist
    await page.getByRole('link', { name: 'Playwright by' }).first().click();

    // Validate web page title 
    await expect(page).toHaveTitle('Playwright - YouTube');
});