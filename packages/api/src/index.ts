import express from "express";
import { addLocation } from "./controller";

const app = express();

app.use(express.json());
app.post("/location/new", addLocation);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`server runs on port ${PORT}`);
});
