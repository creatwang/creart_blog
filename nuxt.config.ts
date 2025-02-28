import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {readFileSync} from "node:fs";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    'nuxt-og-image',
    '@nuxt/scripts',
  ],
  shadcn: {
    prefix: 'Ui',
    componentDir: join(currentDir, './components/ui'),
  },
  components: {
    dirs: [
      {
        path: './components',
        ignore: ['**/*.ts'],
      },
    ],
  },
  colorMode: {
    classSuffix: '',
    disableTransition: true,
  },
  css: [
    join(currentDir, './assets/css/themes.css'),
  ],

  content: {
    documentDriven: true,
    markdown: {
      toc: { depth: 4, searchDepth: 4 },
      anchorLinks: { depth: 4 },
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      langs: [
        JSON.parse(readFileSync('./shiki/languages/less.json', 'utf-8')),
        JSON.parse(readFileSync('./shiki/languages/xml.json', 'utf-8')),
        JSON.parse(readFileSync('./shiki/languages/ssh-config.json', 'utf-8')),
        JSON.parse(readFileSync('./shiki/languages/dart.json', 'utf-8')),
        JSON.parse(readFileSync('./shiki/languages/scss.json', 'utf-8')),
        JSON.parse(readFileSync('./shiki/languages/sql.json', 'utf-8')),
        'fs',
      ],
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'mdc', 'yaml', 'bash', 'ini', 'dotenv'],
    },
    navigation: {
      fields: [
        'icon',
        'navBadges',
        'navTruncate',
        'badges',
        'toc',
        'sidebar',
        'collapse',
        'editLink',
        'prevNext',
        'breadcrumb',
      ],
    },
    experimental: {
      search: {
        indexed: true,
      },
    },
  },
  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 512,
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
      },
    },
  },
  build: {
    transpile: ['shiki'],
  },
  compatibilityDate: '2024-07-05',
});
