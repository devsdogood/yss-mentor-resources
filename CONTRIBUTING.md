# Contributing

## System Dependencies

### Node/npm

This projects uses version `2` of the package-lock.json file. Version `2` requires `npm` 7+. npm `8` comes prebundled with Node `16`. Note: Node `14` should be used for now. [Vercel doesn't support](https://vercel.com/docs/runtimes#official-runtimes/node-js/node-js-version) `16` yet.

## Install project dependencies

### Code

* Clone the repo

### Install project dependencies

`npm install`

This installs dependencies from `package-lock.json`.

### Contentful environment variables

Generate keys in Contentful. See **Settings > API keys**.

Copy the `.env.local.example` file in this directory to `.env.local`:

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `CONTENTFUL_SPACE_ID` should be the **Space ID** field of your API Key
- `CONTENTFUL_ACCESS_TOKEN` should be the **[Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) - access token** field of your API key
- `CONTENTFUL_PREVIEW_TOKEN` should be the **[Content Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/) - access token** field of your API key
- `CONTENTFUL_ENVIRONMENT` should be the branch of the space

## npm scripts

`npm run dev`

This will:

* start the dev server.

`npm run lint`

This will:

* run linters

`npm run build`

This will:

* compiles TypeScript and generates `dist` directory

## Code guidelines

### JS

ESLint is utilized to enforce JavaScript standards. Please see the `.eslintrc.json` file for config.

### Checking coding style

Run `npm run lint` before committing to ensure your changes follow our coding standards.

### Module path aliases

All available module path aliases (such as `@components`) are set as `compilerOptions.paths` in `tsconfig.json`. Prefer using these aliases (giving priority to the most specific) over relative paths (such as `../components`) to reference modules within the application.

If a new alias needs to be added, be sure to include it in `tsconfig.json`.

## EditorConfig

EditorConfig helps maintain consistent file formatting between different editors and developers. Please [install the plugin for you editor of choice](http://editorconfig.org/#download). Please see the `.editorconfig` file at the root of this repo to see what settings are enforced.
