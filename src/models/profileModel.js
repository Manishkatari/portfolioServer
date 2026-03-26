import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    coverImg: { type: String, required: true, trim: true },
    profileImg: { type: String, required: true, trim: true },
    company: { type: String, trim: true },
    role: { type: String, trim: true },
    name: { type: String, required: true, trim: true },
    title: { type: String, trim: true },
    location: { type: String, trim: true },
    connections: { type: String, trim: true },
    description: { type: String, trim: true },
  },
  { timestamps: true },
);

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);

const defaultProfile = {
  coverImg: "../public/images/download.png",
  profileImg: "../public/images/Manish.png",
  company: "Compname",
  role: "Web developer && Java Developer",
  name: "Manish katari",
  title: "",
  location: "Guntur District, Ap, India",
  connections: "25+ connections",
  description: "Natalia Betancourt Galvis, Luc LEMEREZ, and 105 others",
};

export const feachProfileDate = async () => {
  let profile = await Profile.findOne().lean();
  if (!profile) {
    const created = await Profile.create(defaultProfile);
    profile = created.toObject();
  }
  return profile;
};
