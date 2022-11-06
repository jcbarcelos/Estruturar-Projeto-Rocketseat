import express from "express";
import { clientRouter } from "./routes/index";
const app = express();
app.use(express.json());
app.use(clientRouter);
app.listen(3000, () => console.log("Server is running on port 3000"));
