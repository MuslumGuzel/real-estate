import express from "express";
import { createCity, deleteCity, getAllCitys, getCity, udpateCity } from '../controllers/citiescontroller.js';
import { verifyUser } from '../utils/verifytoken.js';

const router = express.Router();

router.post("/", verifyUser, createCity);
router.put("/:id", verifyUser, udpateCity);
router.delete("/:id", verifyUser, deleteCity);
router.get("/:id", getCity);
router.get("/", getAllCitys);

export default router;