const BASE_URL = "/data";

export const getNavbarData = async () => {
  const res = await fetch(`${BASE_URL}/navbar.json`);
  if (!res.ok) throw new Error("Failed to load navbar data");
  return res.json();
};

export const getHomeData = async () => {
  const res = await fetch(`${BASE_URL}/home.json`);
  if (!res.ok) throw new Error("Failed to load home data");
  return res.json();
};

export const getServicesData = async () => {
  const res = await fetch(`${BASE_URL}/services.json`);
  if (!res.ok) throw new Error("Failed to load services data");
  return res.json();
};