import { Router } from "express";
import { locationControllers } from "../controllers/";

const {
	getAllLocations,
	getMostPopularLocations,
	getNearLocationOfUserId,
	getLocationByUserId,
} = locationControllers;

const locationRoutes = Router();

locationRoutes.get("/", getAllLocations);
locationRoutes.get("/popular", getMostPopularLocations);
locationRoutes.get("/near", getNearLocationOfUserId);
locationRoutes.get("/:userId", getLocationByUserId);
export default locationRoutes;
