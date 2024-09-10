import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { IoClose, IoInformationCircleOutline } from "react-icons/io5";
import DataTable from "../../Components/Datatable";
import { treeData } from "../../utils/data";
import { MapCont } from "../../Components";
import { FaCross } from "react-icons/fa";
import { useQuery } from "react-query";
import { getAllTrees } from "../../utils/services";
import { toast } from "react-toastify";

const TreeSurvey = () => {
  const [open, setOpen] = useState(false);
  const [trees,setTrees]=useState([]);
  const [current, setCurrent] = useState({});
  const handleOpen = () => setOpen(!open);

  const handleClick = (obj) => {
    setCurrent(obj);
    setOpen(true);
  };

  const treesQuery = useQuery({
    queryKey:["trees"],
    queryFn:getAllTrees,
    staleTime:2*60*1000
  })

  const columns = [
    // {
    //   header: "Sl. No.",
    //   accessorKey: "index",
    //   enableColumnFilter: false,
    //   cell: (info) => info.renderValue(),
    // },
    {
      header: "Tree Id",
      accessorKey: "tree_id",
      enableColumnFilter: false,
      cell: (info) => info.renderValue(),
    },
    {
      header: "Tree Name",
      accessorKey: "tree_name",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Genera",
      accessorKey: "genre",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Age (Yrs)",
      accessorKey: "age",
      meta: { filterVariant: "range" },
      accessorFn: (row) => {
        return parseInt(row.age);
      },
      // enableColumnFilter: false,
      cell: (info) => info.renderValue(),
    },
    {
      header: "Girth",
      accessorKey: "girth",
      meta: { filterVariant: "range" },
      accessorFn: (row) => {
        return parseInt(row.girth);
      },
      // enableColumnFilter: false,
      cell: (info) => info.renderValue(),
    },
    {
      header: "Height",
      accessorKey: "height",
      meta: { filterVariant: "range" },
      accessorFn: (row) => {
        return parseInt(row.height);
      },
      cell: (info) => info.renderValue(),
    },
    {
      header: "Location",
      accessorKey: "location",
      enableColumnFilter: false,
      enableSorting: false,
      cell: (info) => info.renderValue(),
    },
    {
      header: "Health",
      accessorKey: "health_status",
      cell: (info) => info.renderValue(),
    },
    {
      header: "Action",
      accessorKey: "health",
      enableColumnFilter: false,
      enableSorting: false,
      cell: (info) => {
        return (
          <span className="d-flex justify-content-center">
            <Button
              color="blue"
              size="sm"
              className="flex gap-2"
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

  useEffect(() => {
    if (treesQuery.isError) {
      toast.error("Failed to fetch Trees");
    } else if (!treesQuery.isLoading && treesQuery.data) {
      if (treesQuery.data.statusCode === 1) {
        setTrees(treesQuery.data.data);
        toast.success("data found");
      } else {
        toast.error(treesQuery.data.message);
      }
    }
  }, [treesQuery.isError, treesQuery.data, treesQuery.isLoading]);


  return (
    <div className="w-full">
      <div>
        <Dialog open={open} handler={handleOpen} size="xl">
          <DialogHeader className="flex justify-between ">
            <Typography variant="h4">Tree Details:</Typography>
            <button onClick={handleOpen}>
              <IoClose />
            </button>
          </DialogHeader>
          <DialogBody>
            <div className="flex gap-4 flex-wrap">
              <div className="min-w-[200px] flex-1">
                <Typography variant="h5" className="underline mb-2">
                  Details:
                </Typography>
                <div>
                  <div className="flex mb-2">
                    <label htmlFor="inputEmail3" className="w-1/3">
                      Tree Id
                    </label>
                    <div className="w-2/3">
                      <input
                        type="text"
                        disabled
                        className="form-control"
                        id="inputEmail3"
                        value={current?.tree_id}
                      />
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <label htmlFor="inputEmail3" className="w-1/3">
                      Tree Name
                    </label>
                    <div className="w-2/3">
                      <input
                        type="text"
                        disabled
                        // className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
                        id="inputEmail3"
                        value={current?.tree_name}
                      />
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <label htmlFor="inputEmail3" className="w-1/3">
                      Genera
                    </label>
                    <div className="w-2/3">
                      <input
                        type="text"
                        disabled
                        className="form-control"
                        id="inputEmail3"
                        value={current?.genre}
                      />
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <label htmlFor="inputEmail3" className="w-1/3">
                      Age
                    </label>
                    <div className="w-2/3">
                      <input
                        type="text"
                        disabled
                        className="form-control"
                        id="inputEmail3"
                        value={current?.age}
                      />
                    </div>
                  </div>

                  <div className="flex mb-2">
                    <label htmlFor="inputEmail3" className="w-1/3">
                      Girth
                    </label>
                    <div className="w-2/3">
                      <input
                        type="text"
                        disabled
                        className="form-control"
                        id="inputEmail3"
                        value={current?.girth}
                      />
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <label htmlFor="inputEmail3" className="w-1/3">
                      Height
                    </label>
                    <div className="w-2/3">
                      <input
                        type="text"
                        disabled
                        className="form-control"
                        id="inputEmail3"
                        value={current?.height}
                      />
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <label htmlFor="inputEmail3" className="w-1/3">
                      Health
                    </label>
                    <div className="w-2/3">
                      <input
                        type="text"
                        disabled
                        className="form-control"
                        id="inputEmail3"
                        value={current?.health}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-[200px] flex-1">
                <Typography variant="h5" className="underline mb-2">
                  Location:
                </Typography>
                {/* <div className="d-flex justify-content-center align-items-center">
                  <Image src="/kolkata_map.jpg" width={400} height={360} />
                  {current.location && (
                    <MapCont
                      location={current.location.split(",")}
                      data={`${current.tree_id} <br/> ${current.tree_name}`}
                    />
                  )}
                </div> */}
              </div>
              <div className="min-w-[200px] flex-1">
                <Typography variant="h5" className="underline mb-2">
                  Images:
                </Typography>
                <div className="grid grid-cols-2 gap-3" style={{ gap: "10px" }}>
                  <img
                    src="/tree.jpeg"
                    className=" border-black border shadow rounded-md"
                  />
                  <img
                    src="/tree.jpeg"
                    className=" border-black border shadow rounded-md"
                  />
                  <img
                    src="/tree.jpeg"
                    className=" border-black border shadow rounded-md"
                  />
                </div>
              </div>
            </div>
          </DialogBody>
        </Dialog>
      </div>
      <div className="p-2 bg-white rounded-md shadow-md">
        <Typography variant="h5" className="mb-3 underline font-josephin">
          Tree Survey Reports:
        </Typography>
        <DataTable data={trees} columns={columns} />
      </div>
    </div>
  );
};

export default TreeSurvey;
