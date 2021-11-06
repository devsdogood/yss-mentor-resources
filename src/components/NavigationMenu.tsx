import { INavigationItem } from "@src/types/generated/contentful";

const NavigationMenu: React.FC<{menuItems: INavigationItem[]}> = ({ menuItems }) => (
    <>
        {menuItems.map((item) => (
            <div key={item.sys.id}>{item.fields.title}</div>
        ))}
        <br />
    </>
);

export default NavigationMenu;
