import { Typography, Button } from "@material-tailwind/react";
import React from "react";
import { FaPlus } from "react-icons/fa";

const Payments = () => {
  return (
    <div className="w-full">
      <div className="p-2 bg-white rounded-md shadow-md">
        <Button color="blue" size="sm" className="flex items-center gap-3 mb-3">
          <FaPlus /> New Payment
        </Button>
        <Typography variant="h5" className="mb-3 underline font-josephin">
          Payment History
        </Typography>
        {/* <DataTable columns={column} data={applicationData} bordered={true} /> */}
      </div>
    </div>
  );
};

export default Payments;
