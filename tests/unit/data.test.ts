import { describe, it, expect } from 'bun:test';
import siteData from '../../src/data/site.json';
import teamData from '../../src/data/team.json';
import navData from '../../src/data/nav.json';

// ── site.json ──────────────────────────────────────────────────

describe('site.json', () => {
  it('has required top-level fields', () => {
    expect(siteData.title).toBeTruthy();
    expect(siteData.date).toBeTruthy();
    expect(siteData.email).toBeTruthy();
    expect(siteData.description).toBeTruthy();
  });

  it('event date is a valid date string', () => {
    const d = new Date(siteData.date);
    expect(isNaN(d.getTime())).toBe(false);
  });

  it('has social links', () => {
    expect(siteData.social.twitter).toMatch(/^https?:\/\//);
    expect(siteData.social.youtube).toMatch(/^https?:\/\//);
    expect(siteData.social.linkedin).toMatch(/^https?:\/\//);
  });

  it('subscriptionUrl is a valid URL', () => {
    expect(() => new URL(siteData.subscriptionUrl)).not.toThrow();
  });

  it('cfpUrl is a valid URL', () => {
    expect(() => new URL(siteData.cfpUrl)).not.toThrow();
  });
});

// ── team.json ──────────────────────────────────────────────────

describe('team.json', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(teamData)).toBe(true);
    expect(teamData.length).toBeGreaterThan(0);
  });

  it('has both team and cfpboard members', () => {
    const types = new Set(teamData.map((m) => m.type));
    expect(types.has('team')).toBe(true);
    expect(types.has('cfpboard')).toBe(true);
  });

  it('every member has a non-empty key and name', () => {
    for (const member of teamData) {
      expect(member.key).toBeTruthy();
      expect(member.name).toBeTruthy();
    }
  });

  it('all social URLs are valid', () => {
    for (const member of teamData) {
      for (const social of member.socials ?? []) {
        expect(() => new URL(social.url)).not.toThrow();
      }
    }
  });

  it('keys are unique', () => {
    const keys = teamData.map((m) => m.key);
    const unique = new Set(keys);
    expect(unique.size).toBe(keys.length);
  });

  it('has at least 10 team members and 5 cfpboard members', () => {
    const team = teamData.filter((m) => m.type === 'team');
    const cfp = teamData.filter((m) => m.type === 'cfpboard');
    expect(team.length).toBeGreaterThanOrEqual(10);
    expect(cfp.length).toBeGreaterThanOrEqual(5);
  });
});

// ── nav.json ───────────────────────────────────────────────────

describe('nav.json', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(navData)).toBe(true);
    expect(navData.length).toBeGreaterThan(0);
  });

  it('every item has a label and path', () => {
    for (const item of navData) {
      expect(item.label).toBeTruthy();
      expect(item.path).toMatch(/^\//);
    }
  });

  it('paths are unique', () => {
    const paths = navData.map((i) => i.path);
    const unique = new Set(paths);
    expect(unique.size).toBe(paths.length);
  });

  it('includes expected key sections', () => {
    const paths = navData.map((i) => i.path);
    expect(paths).toContain('/team/');
    expect(paths).toContain('/ctf/');
    expect(paths).toContain('/faq/');
    expect(paths).toContain('/sponsors/');
  });
});
