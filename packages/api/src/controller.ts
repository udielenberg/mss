import { Request, Response } from "express";
import { geoLocationQueue } from "./queue";

export const addLocation = async (req: Request, res: Response) => {
	const { body } = req;
	const { geometry, userId, timestamp } = body;

	if (geometry && userId && timestamp) {
		await geoLocationQueue.add("add-location", body);
		return res.send("ok");
	}
	return res.send("error");
};
