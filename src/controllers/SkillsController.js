import { feachSkillsDate } from "../models/skillsModel.js";
export const getSkills = async (req,res)=>{
  try {
        const data = await feachSkillsDate();
         res.status(200).json(data);
      } catch (error) {
         console.error('Error in getSkills:', error);
         res.status(500).json({ message: 'Failed to retrieve getSkills information' });
      }
}