import { Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { treeApplications } from "../../utils/services";
import { toast } from "react-toastify";
import DataTable from "../../Components/Datatable";
import { IoInformationCircleOutline } from "react-icons/io5";
import { DateTime } from "luxon";

const ManageApplication = () => {
  const [applications, setApplications] = useState([]);
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
  const column = [
    {
      header: "Request Id",
      accessorKey: "request_id",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Date",
      accessorKey: "createdAt",
      accessorFn:(row)=>{
        console.log(row)
        return DateTime.fromISO(row.createdAt).toFormat('dd LLL,yyyy')
      },
      cell: (info) => info.renderValue(),
    },
    {
      header: "Address",
      accessorKey: "location",
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
      header: "Plot Owner",
      accessorKey: "plot_owner",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Survey Status",
      accessorKey: "survey_status",
      cell: (info) => {
        if (info.row.original.survey_status == 1) {
          return <span className="text-green-700">Complete</span>;
        } else if (info.row.original.survey_status == 0) {
          return <span className="text-yellow-900">Pending</span>;
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
            <button
              className="flex justiy-center items-center gap-1 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
              onClick={() => {
                handleClick(info.row.original);
              }}
            >
              <IoInformationCircleOutline size={18} /> Details
            </button>
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
        <DataTable columns={column} data={applications} bordered={true} />
      </div>
    </div>
  );
};

export default ManageApplication;
