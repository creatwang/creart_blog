export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'yanan',
      description: '没有描述',
      ogImage: '/hero.png',
      ogImageComponent: 'ShadcnDocs',
      ogImageColor: 'light',
      umami: {
        enable: true,
        src: 'https://cloud.umami.is/script.js',
        dataWebsiteId: 'd793fbf3-461e-4e26-9ec9-4e9141df96ee',
      },
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    banner: {
      enable: false,
      showClose: true,
      content: 'Welcome to **shadcn-docs-nuxt**',
      to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
      target: '_blank',
      border: true,
    },
    header: {
      title: 'yanan',
      showTitle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      darkModeToggle: true,
      nav: [{
        title: 'Docs',
        links: [{
          title: 'javascript',
          to: '/javascript/javascript',
          description: 'javaScript介绍及应用',
          icon: 'lucide:rocket',
        }, {
          title: 'devOps',
          to: '/webprojectprocess/modulelize',
          description: '前端功能化文档',
          icon: 'lucide:box',
        }, {
          title: '科技前沿',
          to: '/cutting_edge_technology/sevltekit',
          description: '移动端, 混合，pc, 跨平台, 3d, AI',
          target: '_self',
          icon: 'lucide:code',
        }],
      }, {
        title: 'Credits',
        links: [{
          title: 'shadcn-ui',
          to: 'https://ui.shadcn.com/',
          description: 'For the beautiful component design & docs design',
          target: '_blank',
        }, {
          title: 'shadcn-vue',
          to: 'https://www.shadcn-vue.com/',
          description: 'For the vue port of shadcn-ui & some docs component source',
          target: '_blank',
        }, {
          title: 'Docus',
          to: 'https://docus.dev/',
          description: 'For inspiration & some docs component source',
          target: '_blank',
        }, {
          title: 'Nuxt Content',
          to: 'https://content.nuxt.com/',
          description: 'Content made easy for Vue Developers',
          target: '_blank',
        }],
      }],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
      collapseLevel: 1,
      folderStyle: 'default',
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      codeCopyToast: true,
   /*   editLink: {
        enable: true,
        pattern: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt/edit/main/content/:path',
        text: 'Edit this page',
        icon: 'lucide:square-pen',
        placement: ['docsFooter', 'toc'],
      },*/
      backToTop: true,
      codeIcon: {
        'package.json': 'vscode-icons:file-type-node',
        'tsconfig.json': 'vscode-icons:file-type-tsconfig',
        '.npmrc': 'vscode-icons:file-type-npm',
        '.editorconfig': 'vscode-icons:file-type-editorconfig',
        '.eslintrc': 'vscode-icons:file-type-eslint',
        '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
        '.eslintignore': 'vscode-icons:file-type-eslint',
        'eslint.config.js': 'vscode-icons:file-type-eslint',
        'eslint.config.mjs': 'vscode-icons:file-type-eslint',
        'eslint.config.cjs': 'vscode-icons:file-type-eslint',
        '.gitignore': 'vscode-icons:file-type-git',
        'yarn.lock': 'vscode-icons:file-type-yarn',
        '.env': 'vscode-icons:file-type-dotenv',
        '.env.example': 'vscode-icons:file-type-dotenv',
        '.vscode/settings.json': 'vscode-icons:file-type-vscode',
        'nuxt': 'vscode-icons:file-type-nuxt',
        '.nuxtrc': 'vscode-icons:file-type-nuxt',
        '.nuxtignore': 'vscode-icons:file-type-nuxt',
        'nuxt.config.js': 'vscode-icons:file-type-nuxt',
        'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
        'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
        'tailwind.config.js': 'vscode-icons:file-type-tailwind',
        'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
        'vue': 'vscode-icons:file-type-vue',
        'ts': 'vscode-icons:file-type-typescript',
        'tsx': 'vscode-icons:file-type-typescript',
        'mjs': 'vscode-icons:file-type-js',
        'cjs': 'vscode-icons:file-type-js',
        'js': 'vscode-icons:file-type-js',
        'jsx': 'vscode-icons:file-type-js',
        'md': 'vscode-icons:file-type-markdown',
        'mdc': 'vscode-icons:file-type-markdown',
        'py': 'vscode-icons:file-type-python',
        'npm': 'vscode-icons:file-type-npm',
        'pnpm': 'vscode-icons:file-type-pnpm',
        'npx': 'vscode-icons:file-type-npm',
        'yarn': 'vscode-icons:file-type-yarn',
        'bun': 'vscode-icons:file-type-bun',
        'yml': 'vscode-icons:file-type-yaml',
        'json': 'vscode-icons:file-type-json',
        'terminal': 'lucide:terminal',
      },
    },
    footer: {
      credits: '❤️',
      links: [
        {
          title: 'love',
          to: 'https://github.com/',
          target: '_blank',
        },
        {
          icon: 'lucide:github',
          to: 'https://github.com/',
          target: '_blank',
        },
      ],
    },
    toc: {
      enable: true,
      enableInMobile: false,
      enableInHomepage: false,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/creatwang/creat_y_blog',
        target: '_blank',
        showLinkIcon: true,
      }, {
        icon: 'lucide:circle-dot',
        showLinkIcon: true,
      }],
      carbonAds: {
        enable: true,
        disableInDev: true,
        fallback: false,
        fallbackMessage: 'Please support us by disabling your ad blocker.',
        code: 'CW7ITKJN',
        placement: 'shadcn-docs-nuxtvercelapp',
        format: 'cover',
      },
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
