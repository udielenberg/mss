import { RawData, UrlCoordinates } from "./types";
import dotenv from "dotenv";

dotenv.config();

const { LOCATION_IQ_BASE_URL, LOCATION_IQ_ACCESS_TOKEN } = process.env;

export const createUrl = ({ lng, lat }: UrlCoordinates) =>
	`${LOCATION_IQ_BASE_URL}/v1/reverse.php?key=${LOCATION_IQ_ACCESS_TOKEN}&lat=${lat}&lon=${lng}&format=json`;
