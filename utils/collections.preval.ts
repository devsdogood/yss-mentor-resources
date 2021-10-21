import preval from 'next-plugin-preval';
import { ContentTypes } from '../@types/contentTypes';
import getContentful from './contentful';

const collections = [
    ContentTypes.Announcement,
    ContentTypes.Event,
    ContentTypes.Facilitator,
    ContentTypes.Newsletter,
    ContentTypes.Resource,
    ContentTypes.ExternalResource,
];

const getCollections = async () => {
    const contentful = await getContentful();
    const collectionMap = await Promise.all(collections.map(async (collection) => [
        collection,
        await contentful.getEntries({ content_type: collection, include: 2 }),
    ]));

    return Object.fromEntries(collectionMap);
}

export default preval(getCollections());
