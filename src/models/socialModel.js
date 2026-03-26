import mongoose from "mongoose";

const socialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    url: { type: String, required: true, trim: true },
    icon: { type: String, required: true, trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Social = mongoose.models.Social || mongoose.model("Social", socialSchema);

const defaultSocial = [
  { name: "github", url: "https://github.com/", icon: "bi-github", order: 1 },
  {
    name: "linkedin",
    url: "https://linkedin.com",
    icon: "bi-linkedin",
    order: 2,
  },
  {
    name: "email",
    url: "mailto:test@gmail.com",
    icon: "bi-envelope",
    order: 3,
  },
  {
    name: "instagram",
    url: "https://instagram.com",
    icon: "bi-instagram",
    order: 4,
  },
];

export const feachSocialDate = async () => {
  let socials = await Social.find().sort({ order: 1, _id: 1 }).lean();
  if (!socials.length) {
    await Social.insertMany(defaultSocial);
    socials = await Social.find().sort({ order: 1, _id: 1 }).lean();
  }
  return socials.map((item) => ({
    id: item._id,
    name: item.name,
    url: item.url,
    icon: item.icon,
  }));
};
