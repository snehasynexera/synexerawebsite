const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8000/api/frontend"
    : "/api/frontend";

export const getNavbarData = async () => {
  const res = await fetch(`${BASE_URL}/navbar`);
  return res.json();
};

export const getHomeData = async () => {
  const res = await fetch(`${BASE_URL}/home`);
  return res.json();
};

export const getServicesData = async () => {
  const res = await fetch(`${BASE_URL}/services`);
  return res.json();
};
