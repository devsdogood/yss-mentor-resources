# Contributing

## Style

More to come soon.

### Module path aliases

All available module path aliases (such as `@components`) are set as `compilerOptions.paths` in `tsconfig.json`. Prefer using these aliases (giving priority to the most specific) over relative paths (such as `../components`) to reference modules within the application.

If a new alias needs to be added, be sure to include it in `tsconfig.json`.
