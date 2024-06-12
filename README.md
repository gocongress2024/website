# Building the Site
## Making Changes to the Live Site
Github will automatically build any changes pushed to `main` and include them in the live website. If you have changes that you *don't* want to go live, then push them to a different branch, creating it if necessary.

## Previewing on Your Local Machine
To preview changes to the site, you will need `node` and `npm` installed on your machine. Running `npm install` in the root directory of the project will install all dependencies. Then running `npm run dev` will start a build server that will watch for changes in the template files and CSS and serve the result at `http://localhost:4321` by default. 

# Site Layout

## Temlates
The templates are `tsx` and `astro` files, both of which mix javascript with HTML. The file `src/layouts/Layout.astro` is the base template for all pages and includes the navbar and space for main content. The home page is laid out primarily in `src/pages/index.astro` and builds off of the base template. Roughly the first half of the file is the HTML layout; the second half is the Javascript driving various elements on the page. `src/layouts/Blog.astro` is unfinished at the moment but is meant to show a list of recent blog entries.

## Blog Posts
Blog posts should go as markdown files in the `src/blog` directory. The filename will determine the url of the post. For example, `src/blog/intro.md` will render to `gocongress.org/blog/intro`. Each blog post should include *frontmatter*, which is delimited on the top and bottom by lines containing three hyphens. For example,

```
---
title: "Blog Post"
author: "Go Seigen"
date: 2023-12-21
tags: []
---
```

# Front Page Items
In general, content for the front page should be included in `src/pages/index.astro`. Content for the tabs goes in `src/data/eventTabs.json` for the event tab, and in `src/components/HomePageTabs.tsx` for the others. For some other repetitive items such as FAQs, there are `json` files set up to contain the content separately. 

## FAQ
FAQ items should go in `src/data/faqs.json`. Each entry should have a `question` and an `answer` attribute. 

## Map Markers
Items for the map should go in `src/data/mapPlaces.json`. Each entry should have a `name`, `address`, `lat` and `lng`. The address is for display only. The latitude and longitude entries are what will determine the marker's location on the map. The first entry will be marked with a special icon and is intended for the location of the Congress itself.

## Slides
Data for the slideshow should go in `src/data/slides.json`. Each entry should have a `url` pointing to the file, a `title`, and a `caption`.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
