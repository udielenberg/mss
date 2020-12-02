import { Request, Response } from "express";
import { geoLocationQueue, GEOLOCATION_JOB_NAME } from "./queue";

export const addLocation = async (req: Request, res: Response) => {
	const { body } = req;
	const { geometry, userId, timestamp } = body;

	if (geometry && userId && timestamp) {
		await geoLocationQueue.add(GEOLOCATION_JOB_NAME, {
			geometry,
			userId,
			timestamp,
		});
		return res.send("ok");
	}
	return res.send("error");
};
