import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import app from "./app.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });
dotenv.config({ path: path.join(__dirname, "src", ".env") });

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const startServer = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not set");
    }
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    app
      .listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      })
      .on("error", (err) => {
        console.error("Server failed to start:", err);
      });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
  }
};

startServer();
