import { Queue } from "bullmq";

export const CACHE_QUEUE_NAME = "cache-data";
export const GEOLOCATION_QUEUE_NAME = "geo-location";

export const cacheDataQueue = new Queue(CACHE_QUEUE_NAME);
