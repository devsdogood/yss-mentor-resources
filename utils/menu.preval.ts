import preval from 'next-plugin-preval';
import getContentful from './contentful';

const getMenu = async () => {
    const contentful = await getContentful();
    const menuQuery = await contentful.getEntries({ content_type: 'navigationMenu', include: 2 });
    const menu = menuQuery.items?.[0] || {};

    return menu.fields;
}

export default preval(getMenu());
