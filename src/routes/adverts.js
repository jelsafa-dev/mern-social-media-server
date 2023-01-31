import express from "express";
import { getAdvert } from "../controllers/adverts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getAdvert);

export default router;
