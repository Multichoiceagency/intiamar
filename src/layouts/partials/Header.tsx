"use client";

import Logo from "@/components/Logo";
import NavUser from "@/components/NavUser";
import SearchBar from "@/components/SearchBar";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

interface IChildNavigationLink {
  name: string;
  url: string;
}

interface INavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: IChildNavigationLink[];
}

const isMenuItemActive = (menu: INavigationLink, pathname: string) => {
  return (pathname === `${menu.url}/` || pathname === menu.url) && "nav-active";
};

const renderMenuItem = (
  menu: INavigationLink,
  pathname: string,
  handleToggleChildMenu: () => void,
  showChildMenu: boolean,
) => {
  return menu.hasChildren ? (
    <li className="nav-item nav-dropdown group relative" key={menu.name}>
      <span
        className={`nav-link inline-flex items-center ${(menu.children?.map(({ url }) => url).includes(pathname) ||
          menu.children?.map(({ url }) => `${url}/`).includes(pathname)) &&
          "active"
          }`}
        onClick={handleToggleChildMenu}
      >
        {menu.name}
        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </span>
      <ul
        className={`nav-dropdown-list ${showChildMenu ? "visible" : "hidden"}`}
      >
        {menu.children?.map((child, i) => (
          <li className="nav-dropdown-item" key={`children-${i}`}>
            <Link
              href={child.url}
              className={`nav-dropdown-link ${isMenuItemActive(child, pathname)}`}
            >
              {child.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  ) : (
    <li className="nav-item" key={menu.name}>
      <Link
        href={menu.url}
        className={`nav-link block ${isMenuItemActive(menu, pathname)}`}
      >
        {menu.name}
      </Link>
    </li>
  );
};

const Header: React.FC<{ children: any }> = ({ children }) => {
  const [navbarShadow, setNavbarShadow] = useState(false);
  const { main }: { main: INavigationLink[] } = menu;
  const { navigation_button, settings } = config;
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showChildMenu, setShowChildMenu] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
    setShowSidebar(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setShowChildMenu(false);
  };

  const handleToggleChildMenu = () => {
    setShowChildMenu(!showChildMenu);
  };

  return (
    <>
      <header
        className={`header bg-white w-full flex justify-center items-center h-[74px] z-30 ${settings.sticky_header && "sticky top-0"} ${navbarShadow ? "shadow-sm" : "shadow-none"}`}
      >
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-14 py-5 flex justify-between items-center gap-7">
          {/* Navigation */}
          <div className="nav flex-1 justify-start items-center gap-7 hidden md:flex">
            {main.map((menuItem, i) => (
              <div key={`nav-${i}`} className="nav-item py-2 flex justify-center items-center gap-2.5">
                {menuItem.hasChildren ? (
                  <div className="relative group">
                    <span
                      className="text-black text-sm font-normal font-sans uppercase cursor-pointer"
                      onClick={handleToggleChildMenu}
                    >
                      {menuItem.name}
                    </span>
                    <Image
                      src="/icons/Vector.svg"
                      alt="dropdown"
                      width={9}
                      height={6}
                      className="w-[5px] h-2 rotate-90"
                    />
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md min-w-[200px] z-50 ${showChildMenu ? "block" : "hidden"}`}>
                      <ul className="py-2">
                        {menuItem.children?.map((child, childIndex) => (
                          <li key={`child-${childIndex}`}>
                            <Link
                              href={child.url}
                              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isMenuItemActive(child, pathname)}`}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={menuItem.url}
                    className={`text-black text-sm font-normal font-sans uppercase ${isMenuItemActive(menuItem, pathname)}`}
                  >
                    {menuItem.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Logo */}
          <div className="logo flex justify-center items-center flex-shrink-0">
            <Link href="/">
              <h1 className="text-black font-normal font-serif capitalize leading-tight text-[48px]">
                INTI AMAR
              </h1>
            </Link>
          </div>

          {/* Right Icons */}
          <div className="right-icons flex-1 flex justify-end items-center gap-4 lg:gap-7">
            {/* Search Icon */}
            {settings.search && (
              <div className="icon-wrapper cursor-pointer">
                <Image
                  src="/icons/XMLID_1024_.svg"
                  alt="search"
                  width={20}
                  height={20}
                  className="w-5 h-5 lg:w-6 lg:h-6"
                />
              </div>
            )}

            {/* User Icon */}
            {settings.account && (
              <div className="icon-wrapper cursor-pointer">
                <NavUser />
              </div>
            )}

            {/* Wishlist Icon */}
            <div className="icon-wrapper cursor-pointer">
              <Image
                src="/icons/fi_2961957.svg"
                alt="wishlist"
                width={18}
                height={18}
                className="w-4 h-4 lg:w-5 lg:h-5"
              />
            </div>

            {/* Cart Icon */}
            <div className="icon-wrapper cursor-pointer">
              <Suspense fallback={children[0]}>{children[1]}</Suspense>
            </div>



            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button
                className="focus:outline-none"
                onClick={handleToggleSidebar}
              >
                {showSidebar ? (
                  <svg className="h-6 w-6 fill-current text-black" viewBox="0 0 20 20">
                    <title>Menu Close</title>
                    <polygon
                      points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                      transform="rotate(45 10 10)"
                    ></polygon>
                  </svg>
                ) : (
                  <svg className="h-6 w-6 fill-current text-black" viewBox="0 0 20 20">
                    <title>Menu Open</title>
                    <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed top-0 left-0 h-full bg-black opacity-50 w-full z-40 ${showSidebar ? "block" : "hidden"}`}
        onClick={handleToggleSidebar}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white overflow-y-auto w-full md:w-96 p-9 z-50 ${showSidebar ? "transition-transform transform translate-x-0" : "transition-transform transform -translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-14">
          <Logo />
          <button onClick={handleToggleSidebar} className="p-2">
            <svg className="h-5 fill-current block" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              ></polygon>
            </svg>
          </button>
        </div>

        <ul>
          {main.map((menuItem, i) => (
            <React.Fragment key={`mobile-menu-${i}`}>
              {renderMenuItem(
                menuItem,
                pathname,
                handleToggleChildMenu,
                showChildMenu,
              )}
            </React.Fragment>
          ))}
          {navigation_button.enable && (
            <li className="mt-4 inline-block mr-4 md:mr-6">
              <Link
                className="btn btn-outline-primary btn-sm"
                href={navigation_button.link}
              >
                {navigation_button.label}
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Search */}
        {settings.search && (
          <div className="mt-8">
            <Suspense>
              <SearchBar />
            </Suspense>
          </div>
        )}


      </div>
    </>
  );
};

export default Header;
