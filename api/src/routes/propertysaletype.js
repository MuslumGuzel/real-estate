import express from "express";
import { createPropertySaleType, deletePropertySaleType, getAllPropertySaleTypes, getPropertySaleType, udpatePropertySaleType } from '../controllers/propertysaletypescontroller.js';
import { verifyUser } from '../utils/verifytoken.js';

const router = express.Router();

router.post("/", verifyUser, createPropertySaleType);
router.put("/:id", verifyUser, udpatePropertySaleType);
router.delete("/:id", verifyUser, deletePropertySaleType);
router.get("/:id", getPropertySaleType);
router.get("/", getAllPropertySaleTypes);

export default router;