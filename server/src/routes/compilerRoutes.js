import express from "express";
import { loadCode, saveCode } from "../controllers/compilerController.js";
export const compilerRoutes = express.Router();
compilerRoutes.post("/save", saveCode);
compilerRoutes.post("/load", loadCode);
