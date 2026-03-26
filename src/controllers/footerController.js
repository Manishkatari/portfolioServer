import { fetchFooterData } from "../models/footerModel.js";

export const getFooter = async (req, res) => {
  try {
    const data = await fetchFooterData();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in Footer:", error);
    return res.status(500).json({ message: "Server Error" });
  }  
};