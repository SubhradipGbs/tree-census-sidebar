import React, { useState } from "react";
import logo from "/logo.png";
import { useFormik } from "formik";
import { Button, Typography } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/reducers/auth";
import { loginByAuth } from "../../utils/services";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const loginFn = async (obj) => {
    try {
      setLoading(true);
      const response = await loginByAuth(obj);
      if (response.status === 1) {
        toast.success("Successfully LoggedIn");
        localStorage.setItem("token", response.data.token);
        dispatch(
          loginUser({
            userRole: response.data?.roleId,
            userId: response.data?.user_id,
          })
        );
      } else {
        toast.error(response.data.message);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const loginForm = useFormik({
    initialValues: {
      mobileNo: "8910213145",
      password: "Aa@124",
    },
    onSubmit: (values) => {
      console.log(values);
      loginFn(values);
    },
  });

  return (
    <div className="w-screen h-screen p-2 bg-blue-400">
      <div className="w-full h-full flex flex-col md:flex-row md:justify-center items-center md:items-start">
        <div className="w-8/12">
          <div className="w-full flex flex-col md:flex-row gap-4 items-center mt-4 md:mt-1">
            <img src={logo} alt="logo" className="w-10" />
            {/* <h3 className="text-xl font-bold text-white uppercase text-center">
            nanded waghala city municipal corporation
          </h3> */}
            <h1 className="text-white font-bold text-center text-3xl mt-2">
              Welcome to Tree Census Survey
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <div></div>
          </div>
        </div>
        <div className="min-w-4/12 flex flex-col justify-center items-center my-auto">
          <form
            className="bg-white shadow-md min-w-[75%] p-10 rounded-2xl"
            onSubmit={loginForm.handleSubmit}
          >
            {/* <div className="mb-4 flex justify-between">
              <div class="flex items-center">
                <input id="role" type="radio" value="admin" name="role" />
                <label
                  htmlFor="role"
                  class="ms-2 text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                  Admin
                </label>
              </div>
              <div class="flex items-center">
                <input id="role" type="radio" value="citizen" name="role" />
                <label
                  htmlFor="default-radio-1"
                  class="ms-2 text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                  Citizen
                </label>
              </div>
            </div> */}
            <div className="mb-4 text-center text-gray-700 !font-lato text-3xl font-bold">
              <Typography variant="h3" className="font-lato">
                Log In
              </Typography>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mobileNo"
              >
                Mobile No
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mobileNo"
                type="text"
                placeholder="Mobile"
                value={loginForm.values.mobileNo}
                onChange={loginForm.handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={loginForm.values.password}
                onChange={loginForm.handleChange}
              />
              {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
            </div>
            <div className="flex items-center justify-between gap-3">
              <Button size="md" color="blue" type="submit" loading={loading}>
                Sign In
              </Button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
