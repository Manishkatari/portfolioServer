import { fetchAboutData } from '../models/aboutModels.js';

export const getAbout = async (req, res) => {
  try {
    const data = await fetchAboutData();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in getAbout:', error);
    res.status(500).json({ message: 'Failed to retrieve About information' });
  }
};