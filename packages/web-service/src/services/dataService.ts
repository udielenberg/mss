import client from "../db";

const USER_DB = "userDB";
const LOCATIONS = "locations";

export const getAllLocations = async () => {
	try {
		const mongoClient = await client();
		const db = mongoClient.db(USER_DB);
		const locationCollection = db.collection(LOCATIONS);

		const all = await locationCollection.find({}).toArray();
		return all;
	} catch (err) {
		console.error(err);
	}
};

export const getLocationByUserId = async (userId: number) => {
	try {
		const mongoClient = await client();
		const db = mongoClient.db(USER_DB);
		const locationCollection = db.collection(LOCATIONS);

		const location = await locationCollection.findOne({ userId });
		return location;
	} catch (err) {
		console.log(err);
	}
};

export const getMostPopularLocation = async () => {
	try {
		const mongoClient = await client();
		const db = mongoClient.db(USER_DB);
		const locationCollection = db.collection(LOCATIONS);

		const location = await locationCollection
			.aggregate([
				{
					$unwind: "$address.country",
				},
				{
					$sortByCount: "$address.country",
				},
			])
			.toArray();
		return location;
	} catch (err) {
		console.log(err);
	}
};

export const getNearLocationsOfUserId = async (
	userId?: number,
	maxDistance?: number
) => {
	try {
		if (!userId) return null;
		
		const mongoClient = await client();
		const db = mongoClient.db(USER_DB);
		const locationCollection = db.collection(LOCATIONS);

		const nearLocations = await locationCollection
			.find({
				geometry: {
					$near: {
						$maxDistance: maxDistance || 100000,
						$geometry: {
							type: "Point",
							coordinates: [-8.669568, 39.709495],
						},
					},
				},
			})
			.toArray();

		return nearLocations;
	} catch (err) {
		console.log(err);
	}
};
