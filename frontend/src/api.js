import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8000/api/frontend"
    : "/api/frontend";

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
