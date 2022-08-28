import express from "express";
import { createCounty, deleteCounty, getAllCountys, getCounty, udpateCounty } from '../controllers/countiescontroller.js';
import { verifyUser } from '../utils/verifytoken.js';

const router = express.Router();

router.post("/", verifyUser, createCounty);
router.put("/:id", verifyUser, udpateCounty);
router.delete("/:id", verifyUser, deleteCounty);
router.get("/:id", getCounty);
router.get("/", getAllCountys);

export default router;