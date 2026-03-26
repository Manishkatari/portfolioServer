import express from "express";
import { getAbout } from "../controllers/aboutController.js";

const router = express.Router();

/**
 * @route GET /api/about
 * @desc Retrieves information for the 'About' section of the portfolio
 * @access Public
 */
router.get("/", async (req, res, next) => {
  try {
    await getAbout(req, res);
  } catch (error) {
    // Log the error for debugging
    console.error('Error in getAbout route:', error);
    // Send a generic error response
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;