import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";

const app = express();

app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000;

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database is connected successful.");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT} `);
    });
  })
  .catch((err) => console.log(err));

app.use("/api/user", route);