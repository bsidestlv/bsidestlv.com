import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/BSidesTLV 2026/);
  });

  test('has OG meta tags', async ({ page }) => {
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /BSidesTLV/);

    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveAttribute('content', /logo\.svg/);
  });

  test('hero section is visible', async ({ page }) => {
    const logo = page.locator('img[alt="BSidesTLV"]').first();
    await expect(logo).toBeVisible();
  });

  test('shows event date', async ({ page }) => {
    await expect(page.getByText(/June 25, 2026/)).toBeVisible();
  });

  test('shows key stats', async ({ page }) => {
    await expect(page.getByText('1700+')).toBeVisible();
    await expect(page.getByText(/Participants/i)).toBeVisible();
    await expect(page.getByText(/Sessions/i)).toBeVisible();
    await expect(page.getByText(/CTF Challenges/i)).toBeVisible();
  });

  test('has manifesto / apply CTA link', async ({ page }) => {
    const cta = page.getByRole('link', { name: /manifesto.*apply|apply/i });
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute('href', /gamma\.site|bsidestlv-2026/);
  });

  test('has Slack link', async ({ page }) => {
    const slack = page.getByRole('link', { name: /slack/i }).first();
    await expect(slack).toBeVisible();
  });

  test('subscribe CTA section is present', async ({ page }) => {
    await expect(page.getByText(/Don't miss BSidesTLV 2026/i)).toBeVisible();
  });

  test('photo album section is present', async ({ page }) => {
    await expect(page.getByText(/BSidesTLV 2024 Photos/i)).toBeVisible();
  });

  test('footer is present with social links', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer.getByRole('link', { name: /twitter/i })).toBeVisible();
    await expect(footer.getByRole('link', { name: /linkedin/i })).toBeVisible();
  });

  test('footer shows copyright', async ({ page }) => {
    await expect(page.locator('footer p').filter({ hasText: 'TLV' }).first()).toBeVisible();
  });
});
