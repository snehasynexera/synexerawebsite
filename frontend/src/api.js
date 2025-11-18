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

export const getTestimonialsData = async () => {
  const res = await fetch(`${BASE_URL}/testimonials.json`);
  if (!res.ok) throw new Error("Failed to load testimonials data");
  return res.json();
};

export const getFooterData = async () => {
  const res = await fetch(`${BASE_URL}/footer.json`);
  if (!res.ok) throw new Error("Failed to load footer data");
  return res.json();
};


export const getCaseStudiesData = async () => {
  const res = await fetch(`${BASE_URL}/projects.json`);
  if (!res.ok) throw new Error("Failed to load case studies data");
  return res.json();
};
