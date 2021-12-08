import { INavigationItem } from "@src/types/generated/contentful";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

const NavigationMenu: React.FC<{ logo: string; menuItems: INavigationItem[] }> =
  ({ logo, menuItems }) => {
    const router = useRouter();
    const [parentMenuItems, setParentMenuItems] = useState<INavigationItem[]>(
      []
    );
    const [childMenuItems, setChildMenuItems] =
      useState<Record<string, INavigationItem[]>>();

    const [isActive, setActive] = useState<boolean>(false);

    useEffect(() => {
      window?.scrollTo(0, 0);
      setActive(false);
    }, [router.asPath]);

    useEffect(() => {
      setParentMenuItems(
        menuItems.filter((item) => !(item.metadata?.tags as any)?.length)
      );
      setChildMenuItems(
        menuItems
          .filter((item) => (item.metadata?.tags as any)?.length)
          .reduce((childItems, item) => {
            if (!childItems![item.metadata?.tags[0].sys.id]) {
              childItems![item.metadata?.tags[0].sys.id] = [];
            }
            childItems![item.metadata?.tags[0].sys.id].push(item);
            return childItems;
          }, {} as typeof childMenuItems)
      );
    }, [menuItems]);

    const toggleNavbar = () => {
      setActive(!isActive);
    };

    const burgerClass = classNames("navbar-burger", "burger", {
      "styled-link": isActive,
    });
    const navigationClass = classNames("navbar-menu", {
      "styled-link": isActive,
    });

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span className="navbar-item">
            <Link href="/">
              <Image
                src={logo}
                width={115}
                height={115}
                layout="fixed"
                alt="YSS Mentoring Logo"
              />
            </Link>
          </span>
          <div
            className={burgerClass}
            data-target="navigation"
            onClick={toggleNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div className={navigationClass}>
          <div className="navbar-start">
            {parentMenuItems.map((item) => {
              if (childMenuItems![item.fields.title!.toLowerCase()]) {
                return (
                  <div
                    className="navbar-item has-dropdown is-hoverable"
                    key={item.sys.id}
                  >
                    <span className="navbar-item is-uppercase">
                      {item.fields.page ?
                        <Link href={item.fields.page.fields.slug}>
                          {item.fields.title}
                        </Link> :
                        item.fields.title
                      }
                    </span>
                    <div className="navbar-dropdown">
                      {childMenuItems![item.fields.title!.toLowerCase()].map(
                        (item) => (
                          <span
                            className={classNames(
                              "navbar-item",
                              "is-uppercase",
                              {
                                "styled-link":
                                  router.asPath ===
                                    item.fields.page!.fields.slug ||
                                  router.asPath + "/" ===
                                    item.fields.page!.fields.slug,
                              }
                            )}
                            key={item.sys.id}
                          >
                            <Link href={item.fields.page!.fields.slug}>
                              {item.fields.title}
                            </Link>
                          </span>
                        )
                      )}
                    </div>
                  </div>
                );
              } else {
                return (
                  <span
                    className={classNames("navbar-item", "is-uppercase", {
                      "styled-link":
                        router.asPath === item.fields.page!.fields.slug ||
                        router.asPath + "/" === item.fields.page!.fields.slug,
                    })}
                    key={item.sys.id}
                  >
                    <Link href={item.fields.page!.fields.slug}>
                      {item.fields.title}
                    </Link>
                  </span>
                );
              }
            })}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" href="https://www.yss.org/donate/">
                  <strong>Donate</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default NavigationMenu;
