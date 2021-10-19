require('dotenv').config({ path: '.env.local' });
const contentful = require('contentful-management');

module.exports = function () {
  const contentfulClient = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT));
};
