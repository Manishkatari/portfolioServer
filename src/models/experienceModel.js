import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    role: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    points: [{ type: String, trim: true }],
    date: { type: String, required: true, trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Experience =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);

const defaultExperience = [
  {
    role: "Working IT Intern",
    company: "TECHLYNX INNOVATIONS PVT LTD",
    points: [
      "Built dynamic front-end interfaces using React, HTML, CSS, JavaScript integrated with backend services.",
      "Collaborated across SDLC to develop and deploy application features.",
    ],
    date: "Nov 2025",
    order: 1,
  },
  {
    role: "Data Entry Operator",
    company: "Action Supply Chain Solutions Pvt Limited",
    points: [
      "Analyzed supply-chain data and maintained data accuracy and reporting integrity.",
    ],
    date: "Nov 2020 - May 2022",
    order: 2,
  },
];

export const feachExperienceData = async () => {
  let experience = await Experience.find().sort({ order: 1, _id: 1 }).lean();
  if (!experience.length) {
    await Experience.insertMany(defaultExperience);
    experience = await Experience.find().sort({ order: 1, _id: 1 }).lean();
  }
  return experience.map((item) => ({
    id: item._id,
    role: item.role,
    company: item.company,
    points: item.points,
    date: item.date,
  }));
};
