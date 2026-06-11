import { test, expect } from '@playwright/test';

import { baseUrl } from 'e2e/constants';

test.beforeEach(async ({ page }) => {
  await page.goto(baseUrl);
});

test('Show Loading Page', async ({ page }) => {
  await expect(page).toHaveTitle(/Loading/);
});
