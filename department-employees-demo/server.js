import express from "express";
import "./lib/connect_db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.listen(port, () => console.log("Server is running on port: " + port));
