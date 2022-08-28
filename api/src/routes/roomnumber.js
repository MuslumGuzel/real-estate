import express from "express";
import { createRoomNumber, deleteRoomNumber, getAllRoomNumbers, getRoomNumber, udpateRoomNumber } from '../controllers/roomnumberscontroller.js';
import { verifyUser } from '../utils/verifytoken.js';

const router = express.Router();

router.post("/", verifyUser, createRoomNumber);
router.put("/:id", verifyUser, udpateRoomNumber);
router.delete("/:id", verifyUser, deleteRoomNumber);
router.get("/:id", getRoomNumber);
router.get("/", getAllRoomNumbers);

export default router;