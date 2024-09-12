import React from "react";
import logo from "/logo.png";
import UserMenu from "./UserMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "../../store/reducers/ui";

const Header = () => {
  const dispatch = useDispatch();
  const openDrawer = ()=>{
    dispatch(toggleDrawer())
  }
  return (
    <div className="bg-blue-100 p-2 px-3 flex items-center gap-2 text-xl h-[60px]">
      <div className="w-10 block lg:hidden cursor-pointer transition" onClick={openDrawer}>
        <GiHamburgerMenu size={20}/>
      </div>
      <img src={logo} className="w-10" />
      <h1 className="uppercase text-blue-900 text-center flex-1 font-semibold font-josephin text-xs sm:text-sm md:text-md lg:text-xl">
        nanded waghala city municipal corporation
      </h1>
      <UserMenu />
    </div>
  );
};

export default Header;
