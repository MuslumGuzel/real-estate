import express from "express";
import { createPropertyType, deletePropertyType, getAllPropertyTypes, getPropertyType, udpatePropertyType } from '../controllers/propertytypescontroller.js';
import { verifyUser } from '../utils/verifytoken.js';

const router = express.Router();

router.post("/", verifyUser, createPropertyType);
router.put("/:id", verifyUser, udpatePropertyType);
router.delete("/:id", verifyUser, deletePropertyType);
router.get("/:id", getPropertyType);
router.get("/", getAllPropertyTypes);

export default router;