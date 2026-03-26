import { feachHomeDate } from "../models/homeModel.js";

export const getHome = async (req,res)=>{
  try {
        const data = await feachHomeDate();
         res.status(200).json(data);
      } catch (error) {
         console.error('Error in Home:', error);
         res.status(500).json({ message: 'Failed to retrieve Home information' });
      }
}