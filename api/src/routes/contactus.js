import express from "express";
import { createContactUs, deleteContactUs, getAllContactUss, getContactUs, udpateContactUs } from '../controllers/contactuscontroller.js';
import { verifyUser } from '../utils/verifytoken.js';

const router = express.Router();

router.post("/", createContactUs);
router.put("/:id", verifyUser, udpateContactUs);
router.delete("/:id", verifyUser, deleteContactUs);
router.get("/:id", getContactUs);
router.get("/", getAllContactUss);

export default router;