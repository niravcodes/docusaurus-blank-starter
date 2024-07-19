---
sidebar_position: 1
---

# Introduction

The usual Docusaurus initialization with `npx create-docusaurus@latest my-website classic`
comes with a lot of dummy content that I must remove.

That is probably okay for most people who will start a documentation once every few months.

But I hope to place a copy of Docusaurus in every project I have, by default. And I don't want to go
through the desolate process of de-dummifying a new doc everytime. I plan to use this blank
template instead of the official starter template.

## Major changes to the starter

- Simplified or removed most of introductory artefact, removed Blog feature, simplified the homepage
- Preinstalled Mermaid for diagramming and Katex for Math notation
- Favicon, and other images are now simple and non-dinosaur-including (nothing against dinosaurs in general,
  but cute green dinosaurs don't say "cool").
- a `simpleConfig` object in `docusaurus.config.ts` centralizes most things you'd want to change in a
  new doc site without having to parse the entire config

  ```js
  const simpleConfig = {
    title: "Documentation for X",
    tagline: "This is the documentation for X.",

    ghUser: "niravcodes",
    ghRepo: "",

    url: "https://your-docusaurus-site.example.com",
    baseUrl: "/",
  };
  ```

- Default color changed from green to blue
- Removed footer

## Low-effort installation

1. **Initialize the doc**

   ```bash
   npx create-docusaurus@latest -g copy doc-for-x https://github.com/niravcodes/docusaurus-blank-starter

   # or

   git clone https://github.com/niravcodes/docusaurus-blank-starter
   cd docusaurus-blank-starter
   npm install
   ```

   I recommend that you store the docs in the same directory and repo where your code also lives ([Docs as Code]).

[Docs as Code]: https://www.writethedocs.org/guide/docs-as-code/

2. Edit the `simpleConfig` object in `docusaurus.config.ts` config file to reflect your project

## High-effort installation

1. Follow low effort installation first
2. Edit the images in `static/img/` to reflect your brand
3. Edit the colors in `src/css/custom.css` to reflect your brand. A handy CSS generator and tester is available
   in the [Docusaurus Docs](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima)
4. If you don't need Mermaid and Katex, remove them from `package.json` and `docusaurus.config.ts`.
5. If you need a homepage that is not the docs index:

   a. Remove the line `routeBasePath: "/",` from the `docs` preset config in `docusaurus.config.ts`.

   b. Rename `src/pages/somepage.tsx` to `src/pages/index.tsx` and write your homepage in React.
