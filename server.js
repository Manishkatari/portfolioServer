import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import app from "./app.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === "production";
if (!isProduction) {
  dotenv.config({ path: path.join(__dirname, ".env") });
  dotenv.config({ path: path.join(__dirname, "src", ".env") });
}

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI?.trim();
const HOST_URL = process.env.RENDER_EXTERNAL_URL || process.env.HOST_URL ||`http://localhost:${PORT}`;

const startServer = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not set. Define it in your host's environment variables.");
    }
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    app
      .listen(PORT, () => {
        console.log(`Server running on ${HOST_URL}`);
      })
      .on("error", (err) => {
        console.error("Server failed to start:", err);
      });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  }
};

startServer();
