// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Secure Nodejs Guidelines',
  tagline: 'Recommendations for secure applications development with Node.js',
  url: 'https://securenodejsguidelines.ulisesgascon.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ulisesgascon',
  projectName: 'securenodejsguidelines.ulisesgascon.com',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/UlisesGascon/secure-nodejs-guidelines/tree/main'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Secure Nodejs Guidelines',
        logo: {
          alt: 'Node.js Logo',
          src: 'img/nodejs-logo-pantone-black.svg',
          srcDark: 'img/nodejs-logo-pantone-white.svg'
        },
        items: [
          {
            href: 'https://github.com/UlisesGascon/secure-nodejs-guidelines',
            label: 'GitHub',
            position: 'right'
          },
          {
            type: 'localeDropdown',
            position: 'left',
          },
        ]
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Node.js Security Working Group. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    }),

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      es: {
        label: 'Español',
      },
    },
  },
}

module.exports = config
