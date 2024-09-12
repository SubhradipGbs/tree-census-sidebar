import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";
import menuData from "../../utils/menuData";
import { filterMenu } from "../../utils/utils";
import { useLocation, useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../../store/reducers/ui";

const Sidebar = () => {
  const [filteredMenu, setFilteredMenu] = useState([]);
  const isSidebarOpen = useSelector((state) => state.ui.sidebarOpen);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const userRole = useSelector((state) => state.auth.userRole);
  // const userRole = ["admin"];

  // const toggleMenu = (menu, index) => {
  //   if (menu.link) {
  //     navigate(menu.link);
  //     setActiveMenu(activeMenu === index ? null : index);
  //   } else {
  //     setActiveMenu(activeMenu === index ? null : index);
  //   }
  // };

  useEffect(() => {
    const menu = filterMenu(menuData, userRole);
    setFilteredMenu(menu);
  }, []);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <div className={`${isSidebarOpen ? "w-[64px]" : "w-1/6"} hidden lg:block transition-all`}>
      <div className="flex justify-start items-center mb-3 bg-blue-700 h-[60px] p-4">
        <GiHamburgerMenu
          size={23}
          color="#fff"
          className="cursor-pointer"
          onClick={()=>{dispatch(toggleOpen())}}
        />
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
