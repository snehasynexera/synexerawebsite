import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

const __dirname = path.resolve();

app.get("/api/frontend/navbar", (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, "/data/navbar.json")));
  res.json(data);
});

app.get("/api/frontend/home", (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, "/data/hero.json")));
  res.json(data);
});

app.get("/api/frontend/services", (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, "/data/services.json")));
  res.json(data);
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
