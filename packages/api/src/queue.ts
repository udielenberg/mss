import { Queue } from "bullmq";

export const queueName = "geo-location";
export const myQueue = new Queue(queueName);
