import React from "react";
import { Outlet } from "react-router-dom";

const PublicRoute = () => {
  return (
    <div className="w-screen h-screen">
      <Outlet />
    </div>
  );
};

export default PublicRoute;
