import { fetchCertificationsDate } from "../models/certificationModel.js";

export const getCertification = async (req,res)=>{
  try {
      const data = await fetchCertificationsDate();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error in Certification:', error);
      res.status(500).json({ message: 'Failed to retrieve Certification information' });
    }
}