import { useState, useEffect } from "react";
import menuItemsData from "../data/menuItems.json";

interface MenuItem {
  id: number;
  text: string;
  href: string;
}

interface WindowDimension {
  innerWidth: number;
  innerHeight: number;
}

interface NavbarHook {
  isMenuOpen: boolean;
  menuItems: MenuItem[];
  windowDimension: WindowDimension;
  handleToggleMenu: () => void;
  handleNavigation: (hash: string) => void;
}

const useNavbar = (): NavbarHook => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [windowDimension, setWindowDimension] = useState<WindowDimension>({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });

  const handleResize = () => {
    setWindowDimension({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (hash: string) => {
    window.location.href = hash;
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setMenuItems(menuItemsData);
  }, []);

  return {
    isMenuOpen,
    menuItems,
    windowDimension,
    handleToggleMenu,
    handleNavigation,
  };
};

export default useNavbar;
