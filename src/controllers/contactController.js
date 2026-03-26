import { fetchContactById, fetchContactData, saveContactMessage } from "../models/contactModel.js";

export const getContact = async (req, res) => {
  try {
    const data = await fetchContactData();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in getContact:", error);
    res.status(500).json({ message: "Failed to retrieve Contact information" });
  }
}; 

export const getContactByID = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await fetchContactById(id);

    if (!data) {
      return res.status(404).json({ message: "Contact information not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in getContactByID:", error);
    res.status(500).json({ message: "Failed to retrieve Contact information" });
  }
};


export const sendContact = async (req, res) => {
  try {
    const { name, email, message, submittedAt } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    const result = await saveContactMessage({
      name,
      email,
      message,
      submittedAt,
    });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in sendContact:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
};


// export  const deleteContactByID = async (req,res)=>{
//   try {
//      const {id} = req.params;
//      const data = await 
//   } catch (error) {
    
//   }
// }