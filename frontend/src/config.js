const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://127.0.0.1:5000/api/frontend"
    : "https://your-backend.onrender.com/api/frontend";

export default BASE_URL;
