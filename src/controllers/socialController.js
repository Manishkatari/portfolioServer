import { feachSocialDate } from "../models/socialModel.js";

export const getSocial = async (req, res) => {
  try {
    const data = await feachSocialDate();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in Social:", error);
    res.status(500).json({ message: "Failed to retrieve Social information" });
  }
};