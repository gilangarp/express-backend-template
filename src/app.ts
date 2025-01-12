import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import corsOptions from "./config/corsConfig";
import { config } from "./config/serverConfig";
import router from "./router";
import winstonMiddleware from "./middleware/winstonMiddleware";

const app = express();

app.use(cors(corsOptions));
app.use(winstonMiddleware);
app.use("/api", router);

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
