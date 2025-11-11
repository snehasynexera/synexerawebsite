import axios from "axios";
import BASE_URL from "./config";

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
