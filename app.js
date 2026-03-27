import express from "express";
import cors from "cors";

// Import routes
import homeRoutes from './src/routes/homeRoutes.js';
import aboutRoutes from './src/routes/aboutRoutes.js';
import projectRoutes from './src/routes/projectsRoutes.js';
import certificationRoutes from './src/routes/certificationRoutes.js';
import experienceRoutes from './src/routes/experienceRoutes.js';
import educationRoutes from './src/routes/educationRoutes.js';
import contactRoutes from './src/routes/contactRoutes.js';
import profileRoutes from './src/routes/profileRoutes.js';
import footerRoutes from './src/routes/footerRoutes.js';
import headerRoutes from './src/routes/headerRoutes.js';
import skillRoutes from './src/routes/skillsRoutes.js';
import socialRoutes from './src/routes/socialRoutes.js';
import heroRoutes from './src/routes/heroRoutes.js';



const app = express();

// Middleware setup
app.use(cors()); //ui run on post 1576 but my server run on 5000
app.use(express.json()); // Parse JSON bodies

// Route definitions
app.use("/api/hero", heroRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/certifications", certificationRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/footer", footerRoutes);
app.use("/api/header", headerRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/social", socialRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Portfolio Backend API Running...");
});

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;
