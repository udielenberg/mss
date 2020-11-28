import { Request, Response } from "express";
import * as locationService from "../services/dataService";

export const getAllLocations = async (req: Request, res: Response) => {
	try {
		const allLocations = await locationService.getAllLocations();
		return res.json({ data: allLocations });
	} catch (err) {
		console.log(err);
	}
};

export const getLocationByUserId = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const location = await locationService.getLocationByUserId(
			Number(userId)
		);
		return res.json({ data: location });
	} catch (err) {
		console.log(err);
	}
};

export const getNearLocationOfUserId = async (req: Request, res: Response) => {
	try {
		const { userId, maxDistance } = req.query;
		const nearLocations = await locationService.getNearLocationsOfUserId(
			Number(userId),
			Number(maxDistance)
		);

		return res.json({ data: nearLocations });
	} catch (err) {
		console.log(err);
	}
};

export const getMostPopularLocations = async (req: Request, res: Response) => {
	try {
		const locationsByPopuparity = await locationService.getMostPopularLocation();
		return res.json({ data: locationsByPopuparity });
	} catch (err) {
		console.log(err);
	}
};
