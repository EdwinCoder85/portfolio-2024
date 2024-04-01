import { AiOutlineMenu, AiOutlineCloseSquare } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import LogoPersonalDark from "/images/logo/LogoPersonalDark.png";
import LogoPersonalLight from "/images/logo/LogoPersonalLight.png";
import useNavbar from "../../hooks/useNavbar";
import useTheme from "../../hooks/useTheme"; // Importa el custom hook useTheme
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const {
    isMenuOpen,
    menuItems,
    windowDimension,
    handleToggleMenu,
    handleNavigation,
  } = useNavbar();

  const { theme, toggleTheme } = useTheme(); // Utiliza el custom hook useTheme

  const [background, setBackground] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setBackground(true)
      } else {
        setBackground(false)
      }
    })
  }, [])
  

  const themeIcon =
    theme === "light" ? (
      <FaMoon className="text-primaryLight" size="1.5em" />
    ) : (
      <FaSun className="text-yellow-500" size="1.5em" />
    );

  const menuIcon = isMenuOpen ? (
    <div className="flex justify-center items-center cursor-pointer rounded-full h-12 w-12 bg-gray-200 dark:bg-gray-900">
      <AiOutlineCloseSquare
        className="h-9 w-9 block visible z-20 text-tertiaryLight dark:text-tertiaryDark text-shadow-sm dark:text-shadow-sm font-bold"
        // className="h-10 w-10 shadow-lg shadow-slate-500/10 block visible z-20 text-tertiaryLight dark:text-tertiaryDark"
        cursor={"pointer"}
        size={24}
        onClick={handleToggleMenu}
      />
    </div>
  ) : (
    <div className="flex justify-center items-center cursor-pointer rounded-full h-12 w-12 bg-gray-200 dark:bg-gray-900">
      <AiOutlineMenu
        className="h-8 w-8 block visible z-20 text-primaryLight dark:text-yellow-500 font-bold"
        // className="h-10 w-10 shadow-lg shadow-slate-500/10 block visible z-20 text-tertiaryLight dark:text-tertiaryDark"
        cursor={"pointer"}
        size={24}
        onClick={handleToggleMenu}
      />
    </div>
  );

  return (
    <header
      className={`${background && 'bg-white dark:bg-gray-800 shadow-md'} fixed w-full select-none z-30 top-0 ${theme === "dark" ? "dark" : ""}`}
    >
      <div className="flex justify-between items-center h-20 w-[90%] max-w-screen-2xl mx-auto">
        <figure className="ml-2">
          <img
            src={theme === "light" ? LogoPersonalLight : LogoPersonalDark}
            alt="Logo"
            className="w-24 sm:w-28 md:w-32 lg:w-46 lg:h-20"
          />
        </figure>
        <ul className={`${!background && 'text-black'} hidden text-sm lg:text-base font-bold md:flex md:gap-4`}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => handleNavigation(item.href)}
                className="hover:text-primaryLight hover:dark:text-yellow-500 hover:underline hover:underline-offset-8 thick-underline"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div
          onClick={toggleTheme}
          className="flex justify-center items-center cursor-pointer rounded-full h-12 w-12 bg-gray-200 dark:bg-gray-900"
        >
          {themeIcon}
        </div>
        {windowDimension.innerWidth < 768 && menuIcon}
        <div
          className={`${windowDimension.innerWidth < 768 && isMenuOpen ? "right-0" : "right-full"} fixed flex justify-center items-center gap-4 top-0 z-10 h-full w-full border-r bg-cover bg-gradient-to-t dark:from-primaryDark from-primaryLight from-0% dark:via-secondaryDark via-secondaryLight via-51%  dark:to-primaryDark to-primaryLight transition-all ease-in-out duration-500`}
        >
          <ul className="flex flex-col gap-4 text-center">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={handleToggleMenu}
                  className="text-white text-xl text-shadow-sm font-bold hover:text-primaryLight hover:dark:text-primaryDark hover:underline hover:underline-offset-8"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
