import { feachHeaderData } from "../models/headerModel.js";

export const getHeader = async (req,res)=>{
  try {
      const data = await feachHeaderData();
       res.status(200).json(data);
    } catch (error) {
       console.error('Error in Header:', error);
       res.status(500).json({ message: 'Failed to retrieve Header information' });
    }

}