import express from "express";
import { saveCode } from "../controllers/compilerController.js";
export const compilerRoutes = express.Router();
compilerRoutes.post("/save", saveCode);
