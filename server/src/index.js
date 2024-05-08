import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./db/db.js";
import { compilerRoutes } from "./routes/compilerRoutes.js";
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

config({
  path: "./.env",
});
app.use("/compiler",compilerRoutes)

connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server listening on port 3001");
});
