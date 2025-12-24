import express from "express";
import { googleAuth } from "./googleController.js";

const router = express.Router();

router.post("/auth/google", googleAuth);

export default router;