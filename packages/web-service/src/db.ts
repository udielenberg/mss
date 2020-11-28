import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export default async () => {
	const client = new MongoClient(
		`${process.env.MONGODB_URI}/?authSource=admin`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	);

	await client.connect();

	return client;
};
