import preval from 'next-plugin-preval';
import { ContentTypes } from '../@types/contentTypes';
import getContentful from './contentful';

const getMenu = async () => {
    const contentful = await getContentful();
    const menuQuery = await contentful.getEntries({ content_type: ContentTypes.NavigationMenu, include: 2 });
    const menu = menuQuery.items?.[0] || {};

    return menu.fields;
}

export default preval(getMenu());
