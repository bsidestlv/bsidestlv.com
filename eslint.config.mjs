import eslintPluginAstro from 'eslint-plugin-astro';
import markdown from '@eslint/markdown';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const strictTsRules = {
  ...tseslint.configs['recommended-type-checked'].rules,
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
};

export default [
  // Astro recommended rules (includes TypeScript support for .astro files)
  ...eslintPluginAstro.configs.recommended,

  {
    rules: {
      'astro/no-unused-define-vars-in-style': 'error',
      'astro/no-set-html-directive': 'warn',
    },
  },

  // Type-aware TypeScript rules for .ts files
  {
    files: ['**/*.ts'],
    plugins: { '@typescript-eslint': tseslint },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json', './tests/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: strictTsRules,
  },

  // Markdown linting
  ...markdown.configs.recommended,

  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**'],
  },
];
