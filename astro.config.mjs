import { defineConfig, passthroughImageService, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import pageMarkdown from '@nuasite/llm-enhancements';

export default defineConfig({
  site: 'https://bsidestlv.com',
  server: { host: '127.0.0.1' },
  preview: { host: '127.0.0.1' },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        if (/\/ctf\//.test(item.url)) {
          item.changefreq = 'yearly';
          item.priority = 0.4;
          return item;
        }
        if (/\/(agenda|speakers)/.test(item.url)) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
          return item;
        }
        return item;
      },
    }),
    pageMarkdown(),
  ],
  experimental: {
    preserveScriptOrder: true,
    clientPrerender: true,
    contentIntellisense: true,
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Inter',
        cssVariable: '--font-sans',
        weights: ['400', '500', '600', '700'],
      },
      {
        provider: fontProviders.google(),
        name: 'Oswald',
        cssVariable: '--font-display',
        weights: ['400', '500', '600', '700'],
      },
    ],
  },
  image: {
    service: passthroughImageService(),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
