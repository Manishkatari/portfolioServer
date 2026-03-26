import express from "express";
import { getContact, getContactByID, sendContact } from "../controllers/contactController.js";

const router = express.Router();

/**
 * @route GET /api/contact
 * @desc Retrieves contact info or last submission status
 * @access Public
 */
router.get("/", async (req, res) => {
  try {
    await getContact(req, res);
  } catch (error) {
    console.error("Error in getContact route:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

/**
 * @route GET /api/contact/id
 * @desc Get contact by ID
 * @access Public
 */
  
router.get("/:id",async(req,res)=>{
  try {
    await getContactByID(req, res);
  } catch (error) {
     console.error("Error in getContact route:", error);
    res.status(500).json({ message: "Server Error" });
  }
})

/**
 * @route POST /api/contact
 * @desc Accepts contact form submission
 * @access Public
 */
router.post("/", async (req, res) => {
  try {
    await sendContact(req, res);
  } catch (error) {
    console.error("Error in sendContact route:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
