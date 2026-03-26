import { feachExperienceData } from "../models/experienceModel.js";

export const getExperience = async(req,res)=>{
  try {
        const data = await feachExperienceData();
        res.status(200).json(data);
      } catch (error) {
        console.error('Error in Experience:', error);
        res.status(500).json({ message: 'Failed to retrieve Experienceinformation' });
      }

}