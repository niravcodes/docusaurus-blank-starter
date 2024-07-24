# Introduction

The usual Docusaurus initialization with `npx create-docusaurus@latest my-website classic`
comes with a lot of dummy content that I must remove.

That is probably okay for most people who will start a documentation once every few months.

But I hope to place a copy of Docusaurus in every project I have, by default. And I don't want to go
through the desolate process of de-dummifying a new doc everytime. I plan to use this blank
template instead of the official starter template.

Get started quick with:

```bash
npx create-docusaurus@latest -g copy doc-for-x https://github.com/niravcodes/docusaurus-blank-starter
```

## Major changes to the starter

- Simplified or removed most introductory artefact, removed the Blog feature, and simplified the homepage
- Preinstalled Mermaid for diagramming and Katex for Math notation
- The favicon, and all other images are now simple and non-dinosaur-including (nothing against dinosaurs in general,
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

## Additional things not included by default

### TypeScript documentation with TypeDoc

If you are documenting a TypeScript project, you can use Typedoc to have code-reference style docs generated from
the code and the comments, on top of all the hand-written text.

To set that up, use [docusaurus-plugin-typedoc] like so:

```bash
npm install typedoc typedoc-plugin-markdown docusaurus-plugin-typedoc --save-dev
```

```typescript title="docusaurus.config.ts"
module.exports = {
  // Add option types
  // ...

  plugins: [
    [
      "docusaurus-plugin-typedoc",

      // Options
      {
        entryPoints: ["../src/index.ts"],
        tsconfig: "../tsconfig.json",
      },
    ],

    // ...
  ],
};
```

[docusaurus-plugin-typedoc]: https://typedoc-plugin-markdown.org/plugins/docusaurus

### Other resources:

[https://docusaurus.io/community/resources](https://docusaurus.io/community/resources)
