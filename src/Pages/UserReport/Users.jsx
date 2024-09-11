import { Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import DataTable from "../../Components/Datatable";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../utils/services";
import { toast } from "react-toastify";

const Users = () => {
  const [users,setUsers]=useState([]);
  const userQuery = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    staleTime: 2 * 60 * 1000,
  });

  const columns = [
    // {
    //   header: "Sl. No.",
    //   accessorKey: "index",
    //   enableColumnFilter: false,
    //   cell: (info) => info.renderValue(),
    // },
    {
      header: "User Id",
      accessorKey: "user_id",
      enableColumnFilter: false,
      cell: (info) => info.renderValue(),
    },
    {
      header: "Name",
      accessorKey: "name",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Adhaar No",
      accessorKey: "aadhaarNo",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Mobile No",
      accessorKey: "mobileNo",
      enableColumnFilter: false,
      cell: (info) => info.renderValue(),
    },
    {
      header: "Role",
      accessorKey: "role",
      accessorFn: (row) => {
        return row.role?.roleName;
      },
      // enableColumnFilter: false,
      cell: (info) => info.renderValue(),
    },
    // {
    //   header: "Action",
    //   accessorKey: "health",
    //   enableColumnFilter: false,
    //   enableSorting: false,
    //   cell: (info) => {
    //     return (
    //       <span className="d-flex justify-content-center">
    //         <Button
    //           color="blue"
    //           size="sm"
    //           className="flex gap-2"
    //           onClick={() => {
    //             handleClick(info.row.original);
    //           }}
    //         >
    //           <IoInformationCircleOutline size={15} /> Details
    //         </Button>
    //       </span>
    //     );
    //   },
    // },
  ];

  useEffect(() => {
    if (userQuery.isError) {
      toast.error("Failed to fetch Users");
    } else if (!userQuery.isLoading && userQuery.data) {
      if (userQuery.data.statusCode === 1) {
        setUsers(userQuery.data.data);
        toast.success("data found");
      } else {
        toast.error(userQuery.data.message);
      }
    }
  }, [userQuery.isError, userQuery.data, userQuery.isLoading]);

  return (
    <div className="full">
      <div className="p-2 bg-white rounded-md shadow-md">
        <Typography variant="h5" className="mb-3 underline font-josephin">
          Users:
        </Typography>
        <DataTable data={users} columns={columns} />
      </div>
    </div>
  );
};

export default Users;
