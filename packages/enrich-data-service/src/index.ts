import { Worker } from "bullmq";
import {
	cacheDataQueue,
	GEOLOCATION_QUEUE_NAME,
	CACHE_DATA_JOB_NAME,
} from "./queue";
import { enrichData } from "./service";

const workerConnectionConfig = { connection: { host: "redis" } };

const worker = new Worker(
	GEOLOCATION_QUEUE_NAME,
	async (job) => {
		try {
			const enrichedData = await enrichData(job.data);
			if (!enrichedData) {
				throw new Error("data was not enriched");
			}
			return await cacheDataQueue.add(CACHE_DATA_JOB_NAME, enrichedData);
		} catch (err) {
			console.error(err);
		}
	},
	workerConnectionConfig
);
