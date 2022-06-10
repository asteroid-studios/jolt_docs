const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Jolt",
  tagline: "Framework for Flutter",
  url: "https://asteroid-studios.github.io/",
  baseUrl: "/jolt_docs/",
  trailingSlash: true,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "asteroid-studios", // Usually your GitHub org/user name.
  projectName: "jolt_docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Jolt",
      logo: {
        alt: "Jolt Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "welcome",
          position: "left",
          label: "Docs",
        },
        {
          to: "packages",
          label: "Packages",
          position: "left",
        },
        {
          to: "resources",
          label: "Resources",
          position: "left",
        },
        {
          to: "troubleshooting",
          label: "Troubleshooting",
          position: "left",
        },
        {
          href: "https://github.com/asteroid-studios",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/docs/getting-started",
            },
            {
              label: "Troubleshooting",
              to: "/troubleshooting",
            },
            {
              label: "Switching",
              to: "switching",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jolt. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["dart"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          path: 'docs',
          sidebarPath: require.resolve("./sidebarsDocs.js"),
          remarkPlugins: [require('mdx-mermaid')],
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'troubleshooting',
        path: 'troubleshooting',
        routeBasePath: 'troubleshooting',
        sidebarPath: require.resolve('./sidebarsTroubleshooting.js'),
      }, 
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/icon.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/apple-touch-icon.png",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
  ],
};
