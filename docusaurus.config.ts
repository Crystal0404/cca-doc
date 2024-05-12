import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Crystal Carpet Addition',
  tagline: '',
  favicon: 'img/cca-icon.png',

  // Set the production url of your site here
  url: 'https://crystal0404.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cca-doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Crystal0404', // Usually your GitHub org/user name.
  projectName: 'cca-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/cca-icon.png',
    navbar: {
      title: 'Crystal Carpet Addition',
      logo: {
        alt: 'CrystalCarpetAddition Logo',
        src: 'img/cca-icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          label: '文档',
        },
        {
          to: 'eol',
          position: 'left',
          label: '生命周期终点'
        },
        {
          type: 'localeDropdown',
          position: 'right'
        },
        {
          href: 'https://github.com/Crystal0404/CrystalCarpetAddition',
          position: 'right',
          label: 'GitHub'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '模组下载',
          items: [
            {
              label: 'Modrinth',
              to: 'https://modrinth.com/mod/crystalcarpetaddition',
            },
            {
              label: 'Github',
              to: 'https://github.com/Crystal0404/CrystalCarpetAddition/releases'
            }
          ],
        },
        {
          title: '相关项目',
          items: [
            {
              label: 'Fabric Carpet',
              to: 'https://github.com/gnembon/fabric-carpet',
            },
            {
              label: 'Docusaurus',
              to: 'https://docusaurus.io/'
            }
          ],
        },
        {
          title: '网站源码',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/Crystal0404/cca-doc'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Crystal0404, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
