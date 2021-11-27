import preval from 'next-plugin-preval';
import { ContentTypes } from '@src/types/contentTypes';
import getContentful from '@utils/contentful';

const getFooter = async () => {
    const contentful = await getContentful();
    const footerQuery = await contentful.getEntries({ content_type: ContentTypes.Footer, include: 2 });
    const footer = footerQuery.items?.[0] || {};

    return footer.fields;
}

export default preval(getFooter());
