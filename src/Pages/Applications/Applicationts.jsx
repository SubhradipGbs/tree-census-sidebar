import { Button, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import DataTable from "../../Components/Datatable";
import { applicationData } from "../../utils/data";

const Applicationts = () => {
  const [current, setCurrent] = useState({});
  const [show, setShow] = useState(false);
  const handleClick = (obj) => {
    setCurrent(obj);
    setShow(true);
  };
  const column = [
    {
      header: "Sl. No.",
      accessorKey: "slNo",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Request Id",
      accessorKey: "request_id",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Date",
      accessorKey: "date",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Tree",
      accessorKey: "tree",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Address",
      accessorKey: "address",
      cell: (info) => info.renderValue(),
    },
    {
      header: "No. Of Trees",
      accessorKey: "no_of_trees",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Plot Number",
      accessorKey: "plot_number",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Owner",
      accessorKey: "plot_owner",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (info) => {
        if (info.row.original.status == "Completed") {
          return (
            <span className="text-green-700">{info.row.original.status}</span>
          );
        } else if (info.row.original.status == "Pending") {
          return (
            <span className="text-yellow-900">{info.row.original.status}</span>
          );
        } else {
          return (
            <span className="text-red-700">{info.row.original.status}</span>
          );
        }
      },
    },
    {
      header: "Action",
      accessorKey: "health",
      enableColumnFilter: false,
      enableSorting: false,
      cell: (info) => {
        return (
          <span className="flex justify-center">
            <Button
              size="sm"
              color="blue"
              className="flex gap-2 items-center"
              onClick={() => {
                handleClick(info.row.original);
              }}
            >
              <IoInformationCircleOutline size={15} /> Details
            </Button>
          </span>
        );
      },
    },
  ];
  return (
    <div className="w-full">
      <div className="p-2 bg-white rounded-md shadow-md">
        <Typography variant="h5" className="mb-3 underline font-josephin">
          Tree Cutting/Pruning Requests:
        </Typography>
        <DataTable columns={column} data={applicationData} bordered={true} />
      </div>
    </div>
  );
};

export default Applicationts;
