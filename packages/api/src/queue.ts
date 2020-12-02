import { Queue } from "bullmq";

export const geoLocationQueue = new Queue("geo-location", {
	connection: {
		host: "redis",
	},
});

export const GEOLOCATION_JOB_NAME = "add-location";
