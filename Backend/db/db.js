import 'dotenv/config';

import mongoose from "mongoose";

export const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database connected.");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
};
