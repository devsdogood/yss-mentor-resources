import React from "react";
import { INavigationMenuFields } from "@src/types/generated/contentful";
import NavigationMenu from "@components/NavigationMenu";
import menuData from '@utils/menu.preval';
import Script from 'next/script'

const AppLayout: React.FC = ({ children }) => {
    const menu = menuData as INavigationMenuFields;
    const menuItems = menu.menuItems!;

    return (
        <>
            <NavigationMenu logo={`https:${menu.logo.fields.file.url}`} menuItems={menuItems} />
            {children}
        </>
    );
};

export default AppLayout;
