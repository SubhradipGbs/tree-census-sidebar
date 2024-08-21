import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="w-screen h-screen flex">
      {/* Navbar */}
      {/* <aside className="w-64 bg-gray-700 text-white p-4">Sidebar</aside> */}
      <Sidebar />
      <div className="w-5/6 flex flex-col">
        <Header />
        <main className="w-full h-[calc(100vh-60px)] bg-gray-100 p-4 overflow-hidden overflow-y-auto">
          <Outlet />
        </main>
        {/* <footer className="bg-gray-800 text-white p-4">Footer</footer> */}
      </div>
    </div>
  );
};

export default Main;
