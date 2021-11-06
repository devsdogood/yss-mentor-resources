import { INavigationItem } from "@src/types/generated/contentful";
import Link from "next/link";
import Image from "next/image";

const NavigationMenu: React.FC<{ logo: string; menuItems: INavigationItem[] }> =
  ({ logo, menuItems }) => {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a href="/" className="navbar-item">
              <Image
                src={logo}
                width={112}
                height={112}
                layout="fixed"
                alt="YSS Mentoring Logo"
              />
              </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        {/* <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {menuItems.map((item) => (
              <span className="navbar-item is-uppercase" key={item.sys.id}>
                <Link href={item.fields.page!.fields.slug}>
                  {item.fields.title}
                </Link>
              </span>
            ))}
          </div>
        </div> */}
      </nav>
    );
  };

export default NavigationMenu;
