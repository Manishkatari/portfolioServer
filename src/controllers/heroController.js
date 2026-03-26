import { feachHeroDate } from "../models/heroModels.js";

export const getHero = async (req,res)=>{
   try {
        const data = await feachHeroDate();
         res.status(200).json(data);
      } catch (error) {
         console.error('Error in Hero:', error);
         res.status(500).json({ message: 'Failed to retrieve Hero information' });
      }

}