import React from "react";
import { Outlet } from "react-router-dom";

const PublicRoute = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Outlet />
    </div>
  );
};

export default PublicRoute;
