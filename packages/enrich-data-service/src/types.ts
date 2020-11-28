interface geoJSON {
	type: string;
	coordinates: [number, number];
}
export interface RawData {
	timestamp: string;
	userId: string;
	geometry: geoJSON;
}

export interface UrlCoordinates {
	lng: number;
	lat: number;
}
