import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import "./main.css";
import { useSelector } from "react-redux";
import SideDrawer from "./Sidebar/SideDrawer";

const Main = () => {
  const isSidebarOpen = useSelector((state) => state.ui.sidebarOpen);

  return (
    <div className="w-screen h-screen flex">
      {/* Navbar */}
      {/* <aside className="w-64 bg-gray-700 text-white p-4">Sidebar</aside> */}
      <Sidebar />
      <SideDrawer/>
      <div
        className={`w-full ${isSidebarOpen ? "lg:w-[calc(100vw-64px)]" : "lg:w-5/6"} transition-all flex flex-col`}
      >
        <Header />
        <main className="w-full h-[calc(100vh-60px)] bg-gray-100 p-4 overflow-hidden overflow-y-auto main">
          <Outlet />
        </main>
        {/* <footer className="bg-gray-800 text-white p-4">Footer</footer> */}
      </div>
    </div>
  );
};

export default Main;
