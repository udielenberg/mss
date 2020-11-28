import { Worker } from "bullmq";
import {
	cacheDataQueue,
	CACHE_QUEUE_NAME,
	GEOLOCATION_QUEUE_NAME,
} from "./queue";
import { enrichData } from "./service";

const worker = new Worker(GEOLOCATION_QUEUE_NAME, async (job) => {
	try {
		const enrichedData = await enrichData(job.data);
		if (!enrichedData) {
			throw new Error("data was not enriched");
		}
		return await cacheDataQueue.add(CACHE_QUEUE_NAME, enrichedData);
	} catch (err) {
		console.error(err);
	}
});
