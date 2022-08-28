import express from "express";
import { countPropertyByCity, createProperty, deleteProperty, getAllPropertys, getProperty, udpateProperty } from '../controllers/propertiescontroller.js';
import { verifyUser } from '../utils/verifytoken.js';

const router = express.Router();

router.post("/", verifyUser, createProperty);
router.put("/:id", verifyUser, udpateProperty);
router.delete("/:id", verifyUser, deleteProperty);
router.get("/find/:id", getProperty);
router.get("/", getAllPropertys);
router.get("/countpropertybycity", countPropertyByCity);

export default router;