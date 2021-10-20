const createNextPluginPreval = require('next-plugin-preval/config');
const withNextPluginPreval = createNextPluginPreval();

/** @type {import('next').NextConfig} */
module.exports = withNextPluginPreval({
  reactStrictMode: true,
});
