import { feachProjectsData } from "../models/projectsModel.js";

export const getProject = async (req,res)=>{
  try {
        const data = await feachProjectsData();
         res.status(200).json(data);
      } catch (error) {
         console.error('Error in Project:', error);
         res.status(500).json({ message: 'Failed to retrieve Project information' });
      }
}