import { test, expect } from '@playwright/test';

// ── Team ──────────────────────────────────────────────────────

test.describe('Team page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/team/');
  });

  test('has page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Team/);
  });

  test('shows "BSidesTLV Team" section heading', async ({ page }) => {
    await expect(page.getByText('BSidesTLV Team')).toBeVisible();
  });

  test('shows "CFP Review Board" section', async ({ page }) => {
    await expect(page.getByText('CFP Review Board')).toBeVisible();
  });

  test('displays team member names', async ({ page }) => {
    await expect(page.getByText('Keren Elazari')).toBeVisible();
    await expect(page.getByText('Inbar Raz')).toBeVisible();
  });

  test('displays CFP board member names', async ({ page }) => {
    await expect(page.getByText('Limor Kessem')).toBeVisible();
  });
});

// ── FAQ ───────────────────────────────────────────────────────

test.describe('FAQ page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/faq/');
  });

  test('has page title', async ({ page }) => {
    await expect(page).toHaveTitle(/FAQ/i);
  });

  test('shows questions', async ({ page }) => {
    await expect(page.getByText(/What is Security BSides/i)).toBeVisible();
    await expect(page.getByText(/Will talks be in English/i)).toBeVisible();
    await expect(page.getByText(/Is BSidesTLV commercial/i)).toBeVisible();
  });

  test('FAQ accordion expands on click', async ({ page }) => {
    const faq = page.locator('details').first();
    const summary = faq.locator('summary');

    // Initially closed
    await expect(faq).not.toHaveAttribute('open', '');

    // Click to open
    await summary.click();
    await expect(faq).toHaveAttribute('open', '');
  });

  test('shows contact section', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Contact us/i })).toBeVisible();
  });
});

// ── CTF ───────────────────────────────────────────────────────

test.describe('CTF page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ctf/');
  });

  test('has CTF heading', async ({ page }) => {
    await expect(page.getByText(/BSidesTLV CTF/i).first()).toBeVisible();
  });

  test('lists recent CTF years', async ({ page }) => {
    await expect(page.getByRole('link', { name: '2025' })).toBeVisible();
    await expect(page.getByRole('link', { name: '2024' })).toBeVisible();
    await expect(page.getByRole('link', { name: '2016' })).toBeVisible();
  });

  test('shows contact info', async ({ page }) => {
    await expect(page.getByRole('link', { name: /@bsidestlv_ctf/i })).toBeVisible();
  });
});

test.describe('CTF year detail page (2025)', () => {
  test('loads 2025 CTF page', async ({ page }) => {
    await page.goto('/ctf/2025/');
    await expect(page).toHaveTitle(/2025/);
    await expect(page.getByText(/ctf25\.bsidestlv\.com/i).first()).toBeVisible();
    await expect(page.getByText(/BSidesTLV2025/i).first()).toBeVisible();
  });
});

// ── Villages ──────────────────────────────────────────────────

test.describe('Villages page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/villages/');
  });

  test('lists all 3 villages', async ({ page }) => {
    await expect(page.getByRole('link', { name: /AI Hacking Village/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Bug Bounty Village/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Hardware Village/i })).toBeVisible();
  });

  test('navigates to village detail', async ({ page }) => {
    await page.getByRole('link', { name: /Hardware Village/i }).click();
    await expect(page).toHaveURL('/villages/hardware/');
    await expect(page.getByText(/Badge Hacking/i)).toBeVisible();
  });
});

test.describe('Village detail pages', () => {
  test('hardware village shows itinerary', async ({ page }) => {
    await page.goto('/villages/hardware/');
    await expect(page.getByText(/Itinerary/i)).toBeVisible();
    await expect(page.getByText(/Gili Yankovitch/i)).toBeVisible();
  });

  test('bug bounty village shows itinerary', async ({ page }) => {
    await page.goto('/villages/bug-bounty/');
    await expect(page.getByText(/Itinerary/i)).toBeVisible();
    await expect(page.getByText(/Rishiraj Sharma/i)).toBeVisible();
  });

  test('ai hacking village loads', async ({ page }) => {
    await page.goto('/villages/ai-hacking/');
    await expect(page.getByText(/AI Hacking Village/i).first()).toBeVisible();
    await expect(page.getByText(/Adversarial ML/i)).toBeVisible();
  });
});

// ── Sponsors ──────────────────────────────────────────────────

test.describe('Sponsors page', () => {
  test('loads without error', async ({ page }) => {
    const res = await page.goto('/sponsors/');
    expect(res?.status()).toBe(200);
  });

  test('shows sponsor tier headings', async ({ page }) => {
    await page.goto('/sponsors/');
    // Tier headings are <h2> elements on the sponsors listing page
    await expect(page.getByRole('heading', { name: 'Gold', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Partners', exact: true })).toBeVisible();
  });

  test('individual sponsor page loads', async ({ page }) => {
    await page.goto('/sponsors/tenable/');
    await expect(page).toHaveTitle(/Tenable/);
    await expect(page.getByRole('link', { name: /Visit Tenable/i })).toBeVisible();
  });
});

// ── CFP ───────────────────────────────────────────────────────

test.describe('CFP page', () => {
  test('shows submission instructions', async ({ page }) => {
    await page.goto('/cfp/');
    await expect(page.getByText(/Submit your talk/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /CFP portal/i })).toBeVisible();
  });

  test('shows talk/workshop/demo categories', async ({ page }) => {
    await page.goto('/cfp/');
    await expect(page.getByRole('heading', { name: 'Talk', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Workshop', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Demo', exact: true })).toBeVisible();
  });
});

// ── Code of Conduct ───────────────────────────────────────────

test.describe('Code of Conduct page', () => {
  test('loads and shows policy content', async ({ page }) => {
    await page.goto('/code-of-conduct/');
    await expect(page.getByText(/harassment-free/i).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /confcodeofconduct/i })).toBeVisible();
  });
});

// ── 404 ───────────────────────────────────────────────────────

test.describe('404 page', () => {
  test('shows 404 for unknown route', async ({ page }) => {
    await page.goto('/this-page-does-not-exist/');
    await expect(page.getByText('404')).toBeVisible();
    await expect(page.getByRole('link', { name: /back to home/i })).toBeVisible();
  });
});

// ── SEO ───────────────────────────────────────────────────────

test.describe('SEO', () => {
  const routes = ['/', '/faq/', '/team/', '/ctf/', '/villages/', '/sponsors/'];

  for (const route of routes) {
    test(`${route} has meta description`, async ({ page }) => {
      await page.goto(route);
      const desc = page.locator('meta[name="description"]');
      const content = await desc.getAttribute('content');
      expect(content).toBeTruthy();
      expect(content!.length).toBeGreaterThan(10);
    });

    test(`${route} has canonical URL`, async ({ page }) => {
      await page.goto(route);
      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveAttribute('href', /bsidestlv\.com/);
    });
  }
});
