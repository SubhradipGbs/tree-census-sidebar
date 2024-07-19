import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

const Main = () => {
  return (
    <div className="h-screen flex">
      {/* Navbar */}
      {/* <aside className="w-64 bg-gray-700 text-white p-4">Sidebar</aside> */}
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 bg-gray-100 p-4">Content</main>
        {/* <footer className="bg-gray-800 text-white p-4">Footer</footer> */}
      </div>
    </div>
  );
};

export default Main;
