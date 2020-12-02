import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import data from "./data";

dotenv.config();

export const mongoUrl = `${process.env.MONGODB_URI}/?authSource=admin`;

export const mongoOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

export const createLocationSeedData = async (client: MongoClient) => {
	const db = client.db("userDB");
	const collection = db.collection("locations");

	await collection.insertMany(data);
};

export const createIndexLocation2dsphere = async (client: MongoClient) => {
	const db = client.db("userDB");
	const collection = db.collection("locations");

	await collection.createIndex({ geometry: "2dsphere" });
};
