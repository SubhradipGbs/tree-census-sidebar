import React from "react";
import logo from "/logo.png";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <div className="bg-blue-100 p-2 px-3 flex items-center gap-2 text-xl h-[60px]">
      <img src={logo} className="w-10" />
      <h1 className="uppercase text-blue-900 text-center flex-1 font-semibold font-josephin">
        nanded waghala city municipal corporation
      </h1>
      <UserMenu />
    </div>
  );
};

export default Header;
