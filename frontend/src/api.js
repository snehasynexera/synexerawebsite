import axios from "axios"
const BASE_URL = "http://127.0.0.1:5000//api/frontend";

// export const getNavbarData = async () => {
//   const response = await axios.get(`${BASE_URL}/navbar`);
//   return response.data;
// };
export const getNavbarData = async () => {
  const response = await axios.get(`${BASE_URL}/navbar`);
  return response.data;
};


export const getHomeData = async () => {
  const response = await axios.get(`${BASE_URL}/home`);
  return response.data;
};

export const getServicesData = async () => {
  const response = await axios.get(`${BASE_URL}/services`);
  return response.data;
};