import { Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { treeApplications } from "../../utils/services";
import { toast } from "react-toastify";
import DataTable from "../../Components/Datatable";

const ManageApplication = () => {
  const [applications,setApplications]=useState([]);
  const applicationQuery = useQuery({
    queryKey: ["applications"],
    queryFn: treeApplications,
    staleTime: 2 * 60 * 1000,
  });

  useEffect(() => {
    if (applicationQuery.isError) {
      toast.error("Failed to fetch Applications");
    } else if (!applicationQuery.isLoading && applicationQuery.data) {
      if (applicationQuery.data.statusCode === 1) {
        setApplications(applicationQuery.data.data);
        toast.success("data found");
      } else {
        toast.error(applicationQuery.data.message);
      }
    }
  }, [
    applicationQuery.isError,
    applicationQuery.data,
    applicationQuery.isLoading,
  ]);
  const column =[
    {
      header: "Id",
      accessorKey: "request_id",
      enableColumnFilter: false,
      cell: (info) => info.renderValue(),
    },
    {
      header:"Name",
      accessorKey:'name',
      cell: (info) => info.renderValue(),

    },
    {
      header: "Request Type",
      accessorKey: "request_type",
      meta: { filterVariant: "select" },
      cell: (info) => info.renderValue(),
    },
    {
      header: "Location",
      accessorKey: "location",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Plot Number",
      accessorKey: "plot_number",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Plot Owner",
      accessorKey: "plot_owner",
      cell: (info) => info.renderValue(),
    },
    {
      header: "No of Trees",
      accessorKey: "no_of_trees",
      cell: (info) => info.renderValue(),
    },
  ]

  return (
    <div className="w-full">
      <div className="p-2 bg-white rounded-md shadow-md">
        <Typography variant="h5" className="mb-3 underline font-josephin">
          Tree Cutting/Pruning Requests:
        </Typography>
        <DataTable columns={column} data={applications} bordered={true} />
      </div>
    </div>
  );
};

export default ManageApplication;
