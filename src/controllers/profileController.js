import { feachProfileDate } from "../models/profileModel.js";

export const getProfile = async (req,res)=>{
  try {
        const data = await feachProfileDate();
         res.status(200).json(data);
      } catch (error) {
         console.error('Error in Profile:', error);
         res.status(500).json({ message: 'Failed to retrieve Profile information' });
      }
}