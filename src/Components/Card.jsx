import React from "react";

const Card = ({ title, children }) => {
  return (
    <div>
      <div className="w-full bg-white min-h-[100px] text-center rounded-md shadow-md border border-white">
        <div className="py-2 bg-green-50 rounded">
          <Typography className="text-green-900 font-extrabold">
            {title}
          </Typography>
        </div>
        <hr />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
