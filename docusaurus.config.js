// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BB Airways Wiki',
  tagline: 'Airplanes are cool. Thinking of putting a threejs interactive canvas here. Fly a plane 2d side scroller by a bunch of word towers that are generated from the wiki.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Z-n-plus-1-equals-Z-n-squared-plus-C', // Usually your GitHub org/user name.
  projectName: 'BB Airways', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          routeBasePath: 'docs',
          path: 'docs',
          lastVersion: 'current',
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Z-n-plus-1-equals-Z-n-squared-plus-C/BB-Airways-Wiki',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Z-n-plus-1-equals-Z-n-squared-plus-C/BB-Airways-Wiki',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'bounties',
        path: 'bounties',
        routeBasePath: 'bounties',
        sidebarPath: './sidebars.js',
        // ... other options
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'development',
        path: 'development',
        routeBasePath: 'development',
        sidebarPath: './sidebars.js',
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/BB-Airways-Image-wiki.jpg',
      navbar: {
        title: 'BB Airways Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Overview',
          },
          {to: '/development/intro', label: 'Development', position: 'left'},
          {to: '/bounties/intro', label: 'Bounties', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Z-n-plus-1-equals-Z-n-squared-plus-C/BB-Airways-Wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            // title: 'Community',
            // items: [
            //   {
            //     label: 'Stack Overflow',
            //     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //   },
            //   {
            //     label: 'Discord',
            //     href: 'https://discordapp.com/invite/docusaurus',
            //   },
            //   {
            //     label: 'Twitter',
            //     href: 'https://twitter.com/docusaurus',
            //   },
            // ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Blog',
                to: '/bounties',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Z-n-plus-1-equals-Z-n-squared-plus-C/BB-Airways-Wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Z-n-plus-1-equals-Z-n-squared-plus-C. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
