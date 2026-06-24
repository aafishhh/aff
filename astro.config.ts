import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import { unified } from '@astrojs/markdown-remark';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',

  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url;
        // Homepage — highest priority
        if (url === 'https://trendtrackpromocode.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
          item.lastmod = new Date();
        }
        // Blog posts
        else if (url.includes('/blog/') && url !== 'https://trendtrackpromocode.com/blog/') {
          item.priority = 0.8;
          item.changefreq = 'monthly';
          item.lastmod = new Date();
        }
        // Blog index
        else if (url === 'https://trendtrackpromocode.com/blog/') {
          item.priority = 0.7;
          item.changefreq = 'weekly';
          item.lastmod = new Date();
        }
        // Key conversion pages
        else if (url.includes('/pricing/') || url.includes('/alternatives/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
          item.lastmod = new Date();
        }
        // Legal pages — lowest priority
        else if (url.includes('/privacy/') || url.includes('/terms/')) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
          item.lastmod = new Date();
        }
        // Everything else
        else {
          item.priority = 0.6;
          item.changefreq = 'monthly';
          item.lastmod = new Date();
        }
        return item;
      },
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    // Astro's default Sharp service handles local images.
    //
    // Most remote CDN images (Unsplash, Cloudinary, Imgix…) are routed by
    // src/components/common/Image.astro through `unpic`, which rewrites the
    // URL with CDN-side query parameters and serves it straight from the
    // provider — Astro never downloads it, so they don't need to be listed.
    //
    // `domains` only matters for remote URLs that fall through to Astro's
    // native <Image /> (i.e. providers Unpic can't detect, like Pixabay).
    // Listed entries are authorized to be processed by Sharp.
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    processor: unified({
      remarkPlugins: [readingTimeRemarkPlugin],
      rehypePlugins: [responsiveTablesRehypePlugin],
    }),
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
