# Docusaurus Blank Starter

The usual Docusaurus initialization with `npx create-docusaurus@latest my-website classic`
comes with a lot of dummy content that I must remove.

That is probably okay for most people who will start a documentation once every few months.

But I hope to place a copy of Docusaurus in every project I have, by default. And I don't want to go
through the desolate process of de-dummifying a new doc everytime. I plan to use this blank
template instead of the official starter template.

## Major changes to the starter:

- Simplified or removed most of introductory artefact. Removed Blog feature. Simplified the homepage.
- Preinstalled Mermaid for diagramming and katex for Math notation.
- Favicon, and other images are now simple and non-dinosaur including (nothing against dinosaurs in general,
  but cute green dinosaurs don't say "cool".)
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
