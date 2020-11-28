import { MongoClient } from "mongodb";
import { Worker } from "bullmq";
import dotenv from "dotenv";
import {
	createLocationSeedData,
	createIndexLocation2dsphere,
	mongoUrl,
	mongoOptions,
} from "./db";

dotenv.config();

let client: MongoClient | undefined;

const worker = new Worker("cache-data", async (job) => {
	try {
		if (!client) {
			client = new MongoClient(mongoUrl, mongoOptions);
			await client.connect();
			await initiateDB(client);
		}

		const db = client.db("userDB");
		const collection = db.collection("locations");

		await collection.insertOne(job.data);
	} catch (err) {
		console.log(err);
	}
});

async function initiateDB(client: MongoClient) {
	await createLocationSeedData(client);
	await createIndexLocation2dsphere(client);
}
