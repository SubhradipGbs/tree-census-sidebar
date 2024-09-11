import { Button, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import DataTable from "../../Components/Datatable";
import { applicationData } from "../../utils/data";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { treeApplicationByUser } from "../../utils/services";
import { toast } from "react-toastify";

const Applicationts = () => {
  const userId = useSelector((state) => state.auth.userId);
  const [applications, setApplications] = useState([]);

  const [current, setCurrent] = useState({});
  const [show, setShow] = useState(false);

  const { data, isSuccess } = useQuery({
    queryKey: ["selfApplication"],
    queryFn: treeApplicationByUser({ userId }),
    staleTime: 2 * 3600 * 1000,
  });


  const handleClick = (obj) => {
    setCurrent(obj);
    setShow(true);
  };

  useEffect(()=>{
    console.log(data);
  },[data])

  // useEffect(() => {
  //   if (applicationQuery.isError) {
  //     toast.error("Failed to fetch Applications");
  //   } else if (!applicationQuery.isLoading && applicationQuery.data) {
  //     if (applicationQuery.data.statusCode === 1) {
  //       setApplications(applicationQuery.data.data);
  //       toast.success("data found");
  //     } else {
  //       toast.error(applicationQuery.data.message);
  //     }
  //   }
  // }, [
  //   applicationQuery.isError,
  //   applicationQuery.data,
  //   applicationQuery.isLoading,
  //   userId,
  // ]);

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
      accessorKey: "createdAt",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Tree",
      accessorKey: "tree",
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
      header: "Owner",
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
        {/* <DataTable columns={column} data={data} bordered={true} /> */}
      </div>
    </div>
  );
};

export default Applicationts;
