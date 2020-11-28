import { Request, Response } from "express";
import { myQueue, queueName } from "./queue";

export const addLocation = async (req: Request, res: Response) => {
	const { body } = req;
	const { geometry, userId, timestamp } = body;

	if (geometry && userId && timestamp) {
		await myQueue.add(queueName, body);
		return res.send("ok");
	}
	return res.send("error");
};
