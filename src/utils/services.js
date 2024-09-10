import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const loginByAuth = async (obj) => {
  const response = await axios.post(`${url}/auth/login`, obj);
  if (response.data.status == 1) {
    const token = response.data.data.toekn;
    return response.data;
  }
  return response.data;
};

export const getAllUsers = async (obj) => {
  const response = await axios.get(`${url}/users/get-all`);
  return response.data;
};

export const getAllTrees = async () => {
  const access_token = localStorage.getItem("token");
  const response = await axios.get(`${url}/trees/get-all`);
  return response.data;
};
