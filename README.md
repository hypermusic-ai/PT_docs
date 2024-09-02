# Performative Transactions - Docs

Deployed at: https://pt-docs.netlify.app/
(Push to branch/main to automatically deploy the update.)

## Edit docs:

To add documentation pages, add Markdown files (`.md` or `.mdx`) in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## Commands:

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## More:

Check out [Starlight’s docs](https://starlight.astro.build/),
read [the Astro documentation](https://docs.astro.build).
