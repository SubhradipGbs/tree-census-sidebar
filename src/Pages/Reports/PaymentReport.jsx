import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import DataTable from "../../Components/Datatable";
import { paymentData } from "../../utils/data";
import { Button, Typography } from "@material-tailwind/react";
const PaymentReport = () => {
  const columns = [
    {
      header: "Sl. No.",
      accessorKey: "slNo",
      enableColumnFilter: false,
      cell: (info) => info.renderValue(),
    },
    {
      header: "Request Id",
      accessorKey: "request_id",
      enableColumnFilter: false,
      cell: (info) => info.renderValue(),
    },
    {
      header: "Txn Id",
      accessorKey: "txn_id",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Payment On",
      accessorKey: "date",
      meta: { filterVariant: "select" },
      cell: (info) => info.renderValue(),
    },
    {
      header: "Paid By",
      accessorKey: "paidby",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Payment Method",
      accessorKey: "payment_method",
      meta: { filterVariant: "select" },
      // enableColumnFilter: false,
      cell: (info) => info.renderValue(),
    },
    {
      header: "Description",
      accessorKey: "description",
      enableColumnFilter: false,
      cell: (info) => info.renderValue(),
    },
    {
      header: "Amount",
      accessorKey: "amount",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Action",
      accessorKey: "health",
      enableColumnFilter: false,
      enableSorting: false,
      cell: (info) => {
        return (
          <span className="flex justify-center">
            <Button color="blue" size="sm" className="flex gap-2">
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
          Payment Reports:
        </Typography>
        <DataTable data={paymentData} columns={columns} />
      </div>
    </div>
  );
};

export default PaymentReport;
