// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Crystal Carpet Addition',
  tagline: '',
  favicon: 'img/cca-icon.png',

  // Set the production url of your site here
  url: 'https://crystal0404.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js'
        },
        blog: {
          blogTitle: 'CrystalCarpetAddition\'s blog!',
          blogDescription: 'Hello World!',
          postsPerPage: 10,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            to: 'eol',
            position: 'left',
            label: '生命周期终点'
          },
          {
            href: 'https://github.com/Crystal0404/CrystalCarpetAddition',
            label: 'GitHub',
            position: 'right',
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
                to: 'https://github.com/Crystal0404/CrystalCarpetAddition/releases',
              },
              {
                label: 'Github',
                to: 'https://github.com/Crystal0404/CrystalCarpetAddition/releases',
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
                to: 'https://docusaurus.io/',
              }
            ],
          },
          {
            title: '网站源码',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Crystal0404/cca-doc',
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
    }),
};

export default config;
