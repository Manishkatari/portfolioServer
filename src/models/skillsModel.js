import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    SkillName: { type: String, required: true, trim: true },
    value: { type: Number, required: true, min: 0, max: 100 },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Skill = mongoose.models.Skill || mongoose.model("Skill", skillSchema);

const defaultSkills = [
  { SkillName: "HTML / CSS / Bootstrap", value: 90, order: 1 },
  { SkillName: "JavaScript", value: 80, order: 2 },
  { SkillName: "Full Stack Development", value: 70, order: 3 },
  { SkillName: "Selenium / TestNG", value: 85, order: 4 },
  { SkillName: "React JS", value: 75, order: 5 },
  { SkillName: "Node / Express", value: 65, order: 6 },
];

export const feachSkillsDate = async () => {
  let skills = await Skill.find().sort({ order: 1, _id: 1 }).lean();
  if (!skills.length) {
    await Skill.insertMany(defaultSkills);
    skills = await Skill.find().sort({ order: 1, _id: 1 }).lean();
  }
  return skills.map((skill) => ({
    id: skill._id,
    SkillName: skill.SkillName,
    value: skill.value,
  }));
};
