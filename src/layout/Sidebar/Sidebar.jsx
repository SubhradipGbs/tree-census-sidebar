import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";
import menuData from "../../utils/menuData";
import { filterMenu } from "../../utils/utils";
import { useLocation, useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();
  const userRole = "user";
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

  return (
    <div className="w-1/6 min-w-[200px]">
      <div className="flex justify-end items-center mb-3 bg-blue-700 h-16 p-4">
        <GiHamburgerMenu size={23} color="#fff" className="cursor-pointer" />
      </div>
      <div className="w-full">
        {/* <ul className="px-2">
          {filteredMenu.map((menu, index) => (
            <li key={index} className="mb-2">
              <button
                className={`w-full rounded p-3 flex items-center justify-between text-left focus:outline-none hover:text-white hover:bg-blue-700 ${
                  activeMenu === index ? "bg-blue-700 text-white" : ""
                }`}
                onClick={() => toggleMenu(menu, index)}
              >
                <div className="flex items-center my-auto">
                  {menu.icon}
                  <Typography className="ml-2 text-sm">{menu.title}</Typography>
                </div>
                {menu.subMenu && (
                  <div>
                    {activeMenu === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                )}
              </button>
              {activeMenu === index && menu.subMenu && (
                <ul className="ms-9 list-disc">
                  {menu.subMenu.map((subMenu, subIndex) => (
                    <li
                      key={subIndex}
                      className="p-2 cursor-pointer "
                      onClick={() => {
                        navigate(subMenu.link);
                      }}
                    >
                      <Typography className="text-sm hover:text-blue-800 hover:font-bold">
                        {subMenu.title}
                      </Typography>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul> */}
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
