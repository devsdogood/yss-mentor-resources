import React from "react";
import { IFooterFields, INavigationMenuFields } from "@src/types/generated/contentful";
import NavigationMenu from "@components/NavigationMenu";
import menuData from '@utils/menu.preval';
import footerData from '@utils/footer.preval';
import Footer from "@components/Footer";

const AppLayout: React.FC = ({ children }) => {
    const menu = menuData as INavigationMenuFields;
    const menuItems = menu.menuItems!;

    const footer = footerData as IFooterFields;

    return (
        <>
            <NavigationMenu logo={`https:${menu.logo.fields.file.url}`} menuItems={menuItems} />
            {children}
            <Footer entry={footer} />
        </>
    );
};

export default AppLayout;
