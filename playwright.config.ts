/* eslint-disable import/order */
import { defineConfig, devices } from '@playwright/test';
import { baseUrl } from 'e2e/constants';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: process.env.VITE_BASE_URL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Desktop Chrome',
      testDir: './e2e',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'Desktop Firefox',
      testDir: './e2e',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'Desktop Safari',
      testDir: './e2e',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      testDir: './e2e',
      retries: 3,
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      testDir: './e2e',
      retries: 3,
      use: { ...devices['iPhone 12'] },
    },
    /* End of Test against mobile viewports. */

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   testDir: './e2e/*',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   testDir: './e2e/*',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
    /* End of Test against branded browsers. */
  ],

  /* Run your local prod server from pnpm build before starting the tests */
  webServer: {
    command: 'pnpm serve',
    url: baseUrl,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
