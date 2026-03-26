import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

const Home = mongoose.models.Home || mongoose.model("Home", homeSchema);

const defaultHome = {
  name: "Manish Katari",
  role: "Full Stack Developer",
  company: "Techlynx IT Intern",
};

export const feachHomeDate = async () => {
  let home = await Home.findOne().lean();
  if (!home) {
    const created = await Home.create(defaultHome);
    home = created.toObject();
  }
  return home;
};
