import express from "express";
import locationRoutes from "./routes/locationRoutes";
const app = express();

const PORT = process.env.PROT || 3003;

app.get("/health", (req, res) => {
	console.log("health ok!");
	res.send("ok");
});

app.use(express.json());
app.use("/locations", locationRoutes);

app.listen(PORT, async () => {
	console.log(`web serice runs on port ${PORT}`);
});
