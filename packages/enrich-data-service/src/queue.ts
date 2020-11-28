import { Queue } from "bullmq";

export const GEOLOCATION_QUEUE_NAME = "geo-location";

export const cacheDataQueue = new Queue("cache-data");
