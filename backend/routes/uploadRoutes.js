import express from "express";
import uploadController, { upload } from "../controller/uploadController.js"; // Importing upload

const uploadRouter = express.Router();

uploadRouter.post("/aws", upload.single('file'), uploadController); // Use upload variable here

export default uploadRouter;
