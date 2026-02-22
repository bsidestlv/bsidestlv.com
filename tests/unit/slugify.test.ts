import { describe, it, expect } from 'bun:test';
import { slugify } from '../../src/lib/sessionize';

describe('slugify', () => {
  it('lowercases the input', () => {
    expect(slugify('Jane Doe')).toBe('jane-doe');
  });

  it('replaces spaces with hyphens', () => {
    expect(slugify('Alice Bob')).toBe('alice-bob');
  });

  it('removes leading and trailing hyphens', () => {
    expect(slugify(' Jane ')).toBe('jane');
  });

  it('collapses consecutive non-alphanumeric chars into a single hyphen', () => {
    expect(slugify('Dr. Jane Doe, PhD')).toBe('dr-jane-doe-phd');
  });

  it('handles names with accents / unicode (strips to ASCII-safe)', () => {
    expect(slugify('Noë Bar')).toBe('no-bar');
  });

  it('handles already-slug strings', () => {
    expect(slugify('already-a-slug')).toBe('already-a-slug');
  });

  it('handles empty string', () => {
    expect(slugify('')).toBe('');
  });

  it('handles single word', () => {
    expect(slugify('Alice')).toBe('alice');
  });

  it('handles names with numbers', () => {
    expect(slugify('Speaker 1')).toBe('speaker-1');
  });
});
