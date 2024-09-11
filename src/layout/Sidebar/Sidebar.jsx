import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";
import menuData from "../../utils/menuData";
import { filterMenu } from "../../utils/utils";
import { useLocation, useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [isSidebarOpen,setIsSidebarOpen]=useState(false)
  const location = useLocation();

  const navigate = useNavigate();
  const userRole = useSelector((state) => state.auth.userRole);
  // const userRole = ["admin"];

  const toggleMenu = (menu, index) => {
    if (menu.link) {
      navigate(menu.link);
      setActiveMenu(activeMenu === index ? null : index);
    } else {
      setActiveMenu(activeMenu === index ? null : index);
    }
  };

  useEffect(() => {
    const menu = filterMenu(menuData, userRole);
    setFilteredMenu(menu);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${isSidebarOpen ? 'w-[64px]':'w-1/6'}`}>
      <div className="flex justify-end items-center mb-3 bg-blue-700 h-[60px] p-4">
        <GiHamburgerMenu size={23} color="#fff" className="cursor-pointer" onClick={toggleSidebar}/>
      </div>
      <div className="w-full">
        <ul className="px-2">
          {filteredMenu.map((menuItem) => (
            <MenuItem item={menuItem} key={menuItem.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
