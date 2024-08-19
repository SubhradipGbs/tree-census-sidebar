import { Typography } from "@material-tailwind/react";
import React from "react";

const StatCard = ({ title, count }) => {
  return (
    <div className="w-full bg-white min-h-[100px] text-center rounded-md shadow-md border border-white">
      <div className="py-2 bg-green-50 rounded">
        <Typography className="text-green-900 font-extrabold">
          {title}
        </Typography>
      </div>
      <hr />
      <div className="py-5">
        <Typography className="font-extrabold">{count}</Typography>
      </div>
    </div>
  );
};

export default StatCard;
