import React from "react";
import logo from "/logo.png";

const Login = () => {
  return (
    <div className="w-full h-full flex bg-blue-400">
      <div className="w-8/12">
        <div className="w-full flex gap-2 items-center ">
          <img src={logo} alt="logo" className="w-10" />
          {/* <h3 className="text-xl font-bold text-white uppercase text-center">
            nanded waghala city municipal corporation
          </h3> */}
        </div>
        <div className="h-[100%] flex justify-center items-center">
          <div>
            <h1 className="text-white font-bold text-center text-3xl mb-2">
              Welcome to Tree Census Survey
            </h1>
          </div>
        </div>
      </div>
      <div className="w-4/12 flex flex-col justify-center items-center">
        <form className="bg-white shadow-md w-[75%] p-10 rounded-2xl">
          <div className="mb-4 flex justify-between">
            <div class="flex items-center">
              <input id="role" type="radio" value="admin" name="role" />
              <label
                for="role"
                class="ms-2 text-sm font-bold text-gray-700 dark:text-gray-300"
              >
                Admin
              </label>
            </div>
            <div class="flex items-center">
              <input id="role" type="radio" value="citizen" name="role" />
              <label
                for="default-radio-1"
                class="ms-2 text-sm font-bold text-gray-700 dark:text-gray-300"
              >
                Citizen
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Mobile No
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Mobile"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
