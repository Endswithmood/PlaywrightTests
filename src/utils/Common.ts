import { Page } from '@playwright/test';


export const stringFormat = (str: string, ...args: (string | number)[]): string =>
    str.replace(/{(\d+)}/g, (match, index) => args[index]?.toString() || "");


export async function waitUntilAppIdle(page: Page): Promise<void> {
    try {
        // Wait for the function to evaluate in the browser context.
        await page.waitForFunction(() => (window as any).UCWorkBlockTracker?.isAppIdle());
    } catch (e) {
        // Log error with type check for error object
        console.log(`waitUntilIdle failed, ignoring.., error: ${(e as Error).message}`);
    }
}


export async function navigateToApps(
    page: Page,
    appId: string | number,
    appName: string
): Promise<void> {
    console.log('Navigate to ' + appName + ' - Start');
    await page.goto(`/main.aspx?appid=${appId.toString()}`);
    await page.getByRole('button', { name: appName }).isVisible();
    console.log('Navigated to ' + appName + ' - Success');
}