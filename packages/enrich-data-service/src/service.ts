import axios from "axios";
import { RawData } from "./types";
import { createUrl } from "./utils";

export const enrichData = async (rawData: RawData) => {
	const { coordinates } = rawData.geometry;

	if (coordinates.length < 2) {
		throw new Error("Invalid geoJSON format");
	}

	const [lng, lat] = coordinates;
	const url = createUrl({ lng, lat });

	try {
		const enrichedData = await axios.get(url);
		return { ...enrichedData.data, ...rawData };
	} catch (err) {
		console.log(err);
	}
};
