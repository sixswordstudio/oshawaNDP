// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Oshawa NDP',
  tagline: 'Oshawa NDP Riding Association',
  favicon: 'img/NDP_Orange_2.png',

  future: { v4: true },

  // Your live domain and base path
  url: 'https://oshawandp.ca',
  baseUrl: '/',

  // If you host on GitHub Pages, set these; otherwise use your actual org/repo
  organizationName: 'sixswordstudio', // GitHub org/user
  projectName: 'oshawaNDP',        // Repo name

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
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: false,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
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
          src: 'img/NDP_Orange.png',
        },
        items: [
          { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Membership' },
          // { to: '/blog', label: 'News', position: 'left' },
          // { to: '/docs/events', label: 'Events', position: 'left' },
          // { to: '/docs/volunteer', label: 'Volunteer', position: 'right' },
          { to: '/docs/donate', label: 'Donate', position: 'right' },
        ],
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      // Handy for urgent notices (fundraisers, meetings)
      announcementBar: {
        id: 'next-meeting',
        content:
          'Next General Meeting: <a href="/docs/events">Details</a>',
        backgroundColor: '#00A0DC',
        textColor: '#000000',
        isCloseable: true,
      },

      footer: {
        style: 'light',
        // links: [
        //   {
        //     title: 'Information',
        //     items: [
        //       { label: 'Become a member', to: '/docs/membership' },              
        //       // { label: 'About us', to: '/docs/intro' },
        //       // { label: 'Sign a Petition', to: '/docs/constitution' },
        //       // { label: 'News & Updates', to: '/docs/contact' },
        //     ],
        //   },
        //   {
        //     // title: 'Get Involved',
        //     items: [
        //       // { label: 'Make a donation', to: '/docs/volunteer' },
        //       // { label: 'Attend an event', to: '/docs/events' },
        //     ],
        //   },
        //   {
        //     // title: 'Help & Contact',
        //     //items: [
        //       // { label: 'Facebook', href: 'https://facebook.com/oshawandp' },
        //       //{ label: 'Community Resources', href: 'https://instagram.com/oshawandp' }, //todo: update url to match real community resources page
        //       //{ label: 'Email Us', href: 'mailto:info@oshawandp.ca', position: 'right' },
        //     // ],
        //   },
        // ],
        copyright: `© ${new Date().getFullYear()} The Oshawa NDP Association.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'yaml'],
      },
    }),
};

export default config;