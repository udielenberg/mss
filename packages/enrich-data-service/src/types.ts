interface geoJSON {
	type: string;
	coordinates: [number; number];
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

interface LocationIQReverseGeolocationResponse {
	
		place_id: string;
		licence: string;
		osm_type: string;
		osm_id: string;
		lat: string;
		lon: string;
		display_name: string;
		address: {
			cafe: string;
			road: string;
			suburb: string;
			county: string;
			region: string;
			state: string;
			postcode: string;
			country: string;
			country_code: string;
		};
		boundingbox: [
			string,string,string,string
		]
}
export type EnrichedData = LocationIQReverseGeolocationResponse & RawData