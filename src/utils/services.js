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

export const addTreeApplication = async (obj) => {
  const access_token = localStorage.getItem("token");
  const response = await axios.post(`${url}/application/add-new`, obj);
  return response.data;
};

export const treeApplicationByUser = async (userId) => {
  const access_token = localStorage.getItem("token");
  const response = await axios.post(`${url}/application/get-by-user`, {
    userId,
  });
  return response.data;
};

export const treeApplications = async (obj) => {
  const access_token = localStorage.getItem("token");
  const response = await axios.get(`${url}/application/get-all`);
  return response.data;
};

export const treeImagesByTree = async (treeId) => {
  const access_token = localStorage.getItem("token");
  const response = await axios.post(`${url}/trees/img-by-tree`, {
    treeId,
  });
  return response.data;
};