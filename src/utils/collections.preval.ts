import preval from 'next-plugin-preval';
import { ContentTypes } from '@src/types/contentTypes';
import getContentful from '@utils/contentful';

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
        await contentful.getEntries({ content_type: collection, include: 2, order: '-sys.createdAt' }),
    ]));

    return Object.fromEntries(collectionMap);
}

export default preval(getCollections());
