// backend/server.js
import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper to read JSON files
const readJSON = (fileName) => {
  const filePath = path.join(__dirname, "data", fileName);
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// Routes
app.get("/api/frontend/navbar", (req, res) => {
  res.json(readJSON("navbar.json"));
});

app.get("/api/frontend/home", (req, res) => {
  res.json(readJSON("hero.json"));
});

app.get("/api/frontend/services", (req, res) => {
  res.json(readJSON("services.json"));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
