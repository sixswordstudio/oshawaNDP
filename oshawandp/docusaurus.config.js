// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Oshawa NDP',
  tagline: 'Oshawa NDP Riding Association',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  // Your live domain and base path
  url: 'https://oshawandp.ca',
  baseUrl: '/',

  // If you host on GitHub Pages, set these; otherwise use your actual org/repo
  // organizationName: 'oshawandp', // GitHub org/user
  // projectName: 'website',        // Repo name

  // Friendlier during setup
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          path: 'docs',
          routeBasePath: '/docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/oshawandp/website/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl: 'https://github.com/oshawandp/website/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          // If you don’t want a blog yet, set routeBasePath to false:
          // routeBasePath: false,
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
      image: 'img/social-card.jpg', // 1200x630 social image
      navbar: {
        title: 'Oshawa NDP',
        logo: {
          alt: 'Oshawa NDP',
          src: 'img/logo.svg',
        },
        items: [
          { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },
          { to: '/blog', label: 'News', position: 'left' },
          { to: '/docs/events', label: 'Events', position: 'left' },
          { to: '/docs/volunteer', label: 'Volunteer', position: 'left' },
          { href: 'https://github.com/oshawandp/website', label: 'GitHub', position: 'right' },
        ],
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // Handy for urgent notices (fundraisers, meetings)
      announcementBar: {
        id: 'sept-meeting',
        content:
          'Oshawa NDP General Meeting: Sept 12, 7 pm at the community hall. <a href="/docs/events">Details</a>',
        backgroundColor: '#f5f0e6',
        textColor: '#000000',
        isCloseable: true,
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              { label: 'Who We Are', to: '/docs/intro' },
              { label: 'Constitution', to: '/docs/constitution' },
              { label: 'Contact', to: '/docs/contact' },
            ],
          },
          {
            title: 'Get Involved',
            items: [
              { label: 'Volunteer', to: '/docs/volunteer' },
              { label: 'Membership', to: '/docs/membership' },
              { label: 'Events', to: '/docs/events' },
            ],
          },
          {
            title: 'Follow',
            items: [
              { label: 'Facebook', href: 'https://facebook.com/oshawandp' },
              { label: 'Instagram', href: 'https://instagram.com/oshawandp' },
              { label: 'Email', href: 'mailto:info@oshawandp.ca' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Oshawa NDP Riding Association.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'yaml'],
      },
    }),
};

export default config;