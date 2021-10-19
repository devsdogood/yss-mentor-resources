require('dotenv').config({ path: '.env.local' });
const contentful = require('contentful-management');

/** Retrieves the `contentful-management` client.
 * This is only used for codegen
 * (use `utils/contentful.ts` for the content delivery API client) */
module.exports = function () {
  const contentfulClient = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT));
};
