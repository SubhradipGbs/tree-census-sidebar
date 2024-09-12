import { Drawer } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../store/reducers/ui";
import { IoClose } from "react-icons/io5";
import { filterMenu } from "../../utils/utils";
import menuData from "../../utils/menuData";
import MenuItem from "./MenuItem";

function SideDrawer() {
  const open = useSelector((state) => state.ui.drawerOpen);
  const userRole = useSelector((state) => state.auth.userRole);

  const [filteredMenu, setFilteredMenu] = useState([]);
  const dispatch = useDispatch();

  const closeDrawer = () => {
    dispatch(toggleDrawer());
  };

  useEffect(() => {
    const menu = filterMenu(menuData, userRole);
    setFilteredMenu(menu);
  }, []);

  return (
    <Drawer open={open} onClose={closeDrawer}>
      <div className="w-full">
        <div className="h-20 p-2 flex justify-end items-start">
          <IoClose size={30} onClick={closeDrawer}/>
        </div>
        <div className="w-full">
          <ul className="p-2">
            {filteredMenu.map((menuItem) => (
              <MenuItem item={menuItem} key={menuItem.title} />
            ))}
          </ul>
        </div>
      </div>
    </Drawer>
  );
}

export default SideDrawer;
