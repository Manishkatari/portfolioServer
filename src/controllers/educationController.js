import { fetchEductionData } from "../models/educationModel.js";

export const getEducation = async (req, res) => {
  try {
    const data = await fetchEductionData();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in Eduction:", error);
    return res
      .status(500)
      .json({ message: "Failed to retrieve Eduction information" });
  }
};
