import express from "express";
import figmaConnect from "../controller/figmaCon";

const figmaRouter = express.Router();

figmaRouter.post("/figma",figmaConnect)

