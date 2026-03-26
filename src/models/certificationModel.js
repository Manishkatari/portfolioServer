import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Certification =
  mongoose.models.Certification ||
  mongoose.model("Certification", certificationSchema);

const defaultCertifications = [
  {
    title: "Certified Full Stack Java Developer - Udemy",
    date: "Mar 2024 - Jan 2025",
    order: 1,
  },
  {
    title: "QA Automation Testing - Selenium",
    date: "2024",
    order: 2,
  },
];

export const fetchCertificationsDate = async () => {
  let certifications = await Certification.find()
    .sort({ order: 1, _id: 1 })
    .lean();
  if (!certifications.length) {
    await Certification.insertMany(defaultCertifications);
    certifications = await Certification.find()
      .sort({ order: 1, _id: 1 })
      .lean();
  }
  return certifications.map((item) => ({
    id: item._id,
    title: item.title,
    date: item.date,
  }));
};
