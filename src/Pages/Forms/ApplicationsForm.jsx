import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import React from "react";
import { treeApplication } from "../../utils/services";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ApplicationForm = () => {
  const userId = useSelector((state) => state.auth.userId);
  const queryClient = useQueryClient();
  const apllyTree = useMutation({
    mutationFn: (data) => {
      return treeApplication(data);
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["application"] });
      if (response.statusCode == 1) {
        toast.success(response.message);
        formik.resetForm();
      } else {
        toast.error(response.message);
      }
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      location: "",
      plot_number: "",
      plot_owner: "",
      no_of_trees: "",
      request_type: "",
      reason: "",
      appliedBy: "",
    },
    onSubmit: (values) => {
      console.log(values);
      formik.setFieldValue("appliedBy", userId);
      apllyTree.mutate(formik.values);
    },
  });

  return (
    <div>
      <div className="w-full">
        <form onSubmit={formik.handleSubmit}>
          <Card className="max-w-[450px] mx-auto">
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-5 text-center"
              >
                Tree Cutting/Pruning Application Form
              </Typography>
              <div className="inline-flex items-center justify-center w-full mb-5">
                <hr className="w-64 h-1 my- bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                  <svg
                    className="w-4 h-4 text-gray-700 dark:text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                </div>
              </div>
              <div className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    name="name"
                    id="name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
                  >
                    Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    name="location"
                    id="location"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={formik.values.location}
                    onChange={formik.handleChange}
                  />
                  <label
                    htmlFor="location"
                    className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Location
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="number"
                    name="no_of_trees"
                    id="no_of_trees"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={formik.values.no_of_trees}
                    onChange={formik.handleChange}
                  />
                  <label
                    htmlFor="no_of_trees"
                    className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    No. of Trees
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="plot_number"
                      id="ploCt_number"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={formik.values.plot_number}
                      onChange={formik.handleChange}
                    />
                    <label
                      htmlFor="plot_number"
                      className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Plot Number
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="plot_owner"
                      id="plot_owner"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={formik.values.plot_owner}
                      onChange={formik.handleChange}
                    />
                    <label
                      htmlFor="plot_owner"
                      className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Plot Owner
                    </label>
                  </div>
                </div>
                <div className="w-full mb-5 group">
                  <label htmlFor="request_type" className="sr-only">
                    Service type
                  </label>
                  <select
                    value={formik.values.request_type}
                    onChange={formik.handleChange}
                    id="request_type"
                    className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option value="">Survice type</option>
                    <option value="cutting">Cutting</option>
                    <option value="pruning">Pruning</option>
                  </select>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <textarea
                    id="reason"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={formik.values.reason}
                    onChange={formik.handleChange}
                  ></textarea>
                  <label
                    htmlFor="reason"
                    className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Reason
                  </label>
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0 text-end">
              <Button className="bg-blue-700" loading={false} type="submit">
                Submit
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
