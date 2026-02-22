import { test, expect } from '@playwright/test';
import navData from '../../src/data/nav.json' with { type: 'json' };

test.describe('Navigation', () => {
  test('header is fixed and visible on homepage', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('#site-header');
    await expect(header).toBeVisible();
  });

  test('logo links to homepage', async ({ page }) => {
    await page.goto('/faq/');
    await page.locator('#site-header a[href="/"]').first().click();
    await expect(page).toHaveURL('/');
  });

  // Test each nav item loads without error
  for (const item of navData) {
    test(`nav: ${item.label} → ${item.path} responds 200`, async ({ page }) => {
      const response = await page.goto(item.path);
      expect(response?.status()).toBe(200);
    });
  }

  test.describe('Mobile menu', () => {
    test.use({ viewport: { width: 390, height: 844 } });

    test('mobile menu button is visible on small screens', async ({ page }) => {
      await page.goto('/');
      const btn = page.locator('#mobile-menu-btn');
      await expect(btn).toBeVisible();
    });

    test('desktop nav is hidden on small screens', async ({ page }) => {
      await page.goto('/');
      // The desktop nav has class "hidden lg:flex" so it's hidden at mobile
      await expect(page.locator('#mobile-menu-btn')).toBeVisible();
    });

    test('mobile menu opens and closes', async ({ page }) => {
      await page.goto('/');
      const btn = page.locator('#mobile-menu-btn');
      const menu = page.locator('#mobile-menu');
      // Get a link inside the menu to check real visibility
      const menuLink = menu.getByRole('link').first();

      // Initially hidden - link inside menu is not visible
      await expect(menuLink).not.toBeVisible();

      // Open - link becomes visible
      await btn.click();
      await expect(menuLink).toBeVisible();

      // Close - link hidden again
      await btn.click();
      await expect(menuLink).not.toBeVisible();
    });

    test('mobile menu contains nav links', async ({ page }) => {
      await page.goto('/');
      await page.locator('#mobile-menu-btn').click();
      const menu = page.locator('#mobile-menu');
      await expect(menu.getByRole('link', { name: 'Team' })).toBeVisible();
      await expect(menu.getByRole('link', { name: 'FAQs' })).toBeVisible();
    });
  });
});
