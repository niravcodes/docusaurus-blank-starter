import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const simpleConfig = {
  title: "Documentation for X",
  tagline: "This is the documentation for X.",

  ghUser: "niravcodes",
  ghRepo: "",

  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",
};

const config: Config = {
  title: simpleConfig.title,
  tagline: simpleConfig.tagline,
  favicon: "img/favicon.ico",

  url: simpleConfig.url,
  baseUrl: simpleConfig.baseUrl,

  organizationName: simpleConfig.ghUser,
  projectName: simpleConfig.ghRepo,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    image: "img/social-card.jpg",
    navbar: {
      title: simpleConfig.title,
      logo: {
        alt: `${simpleConfig.title} Logo`,
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: `https://github.com/${simpleConfig.ghUser}/${simpleConfig.ghRepo}`,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()} ${
        simpleConfig.title
      }`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash"],
    },

    markdown: {
      mermaid: true,
    },
    themes: ["@docusaurus/theme-mermaid"],
  } satisfies Preset.ThemeConfig,
};

export default config;
