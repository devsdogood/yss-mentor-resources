import { createClient } from 'contentful';

const getContentfulDelivery = async () => {
    return await createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
        resolveLinks: true,
    });
}

export default getContentfulDelivery;
