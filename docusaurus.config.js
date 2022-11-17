// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'zach wick',
  tagline: 'Making developer experiences educational.',
  url: 'https://showcase.zachwick.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zachwick', // Usually your GitHub org/user name.
  projectName: 'showcase', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All writings',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/about', label: 'About', position: 'left'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Gallery',
          },
          {to: '/blog', label: 'Writings', position: 'left'},
          {
            href: 'https://github.com/zachwick/showcase',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Portfolio',
            items: [
              {
                label: 'Gallery',
                to: '/docs/intro',
              },
              {
                label: 'Writings',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/zachwick',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/zachwick',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/zachwick/',
              },
            ],
          },
          {
            title: 'Projects',
            items: [
              {
                label: 'genie',
                href: 'https://zachwick.github.io/genie/',
              },
              {
                label: 'ze',
                href: 'https://github.com/zachwick/ze',
              },
              {
                label: 'watermark',
                href: 'https://github.com/zachwick/watermark',
              },
              {
                label: 'babble',
                href: 'https://github.com/zachwick/babble',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} zach wick. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
