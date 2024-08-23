import axios from "axios";

const url = "http://192.168.0.104:3000";

export const loginByAuth = async (obj) => {
  const response = await axios.post(`${url}/auth/login`, obj);
  if (response.data.status == 1) {
    const token = response.data.data.toekn;
    return response.data;
  }
  return response.data;
};
