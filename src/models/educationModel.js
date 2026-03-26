import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    degree: { type: String, required: true, trim: true },
    college: { type: String, required: true, trim: true },
    year: { type: String, required: true, trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Education =
  mongoose.models.Education || mongoose.model("Education", educationSchema);

const defaultEducation = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    college: "Vignan's Lara Institute of Technology and Science",
    year: "2016 - 2019",
    order: 1,
  },
];

export const fetchEductionData = async () => {
  let education = await Education.find().sort({ order: 1, _id: 1 }).lean();
  if (!education.length) {
    await Education.insertMany(defaultEducation);
    education = await Education.find().sort({ order: 1, _id: 1 }).lean();
  }
  return education.map((item) => ({
    id: item._id,
    degree: item.degree,
    college: item.college,
    year: item.year,
  }));
};
