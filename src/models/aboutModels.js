import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    description: { type: String, required: true, trim: true },
    skills: [{ type: String, trim: true }],
    summary: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

const About = mongoose.models.About || mongoose.model("About", aboutSchema);

const defaultAbout = {
  description: "I am a Full Stack Developer",
  skills: ["React", "Node", "MongoDB"],
  summary:
    "QA Automation Engineer with hands-on experience in designing and executing automated test frameworks using Selenium, TestNG, and Appium. Skilled in API validation with Postman and version control using Git/GitHub. Reduced manual testing time by 60% through hybrid automation frameworks. Strong understanding of SDLC, STLC, Agile, and CI/CD processes.",
};

export const fetchAboutData = async () => {
  let about = await About.findOne().lean();
  if (!about) {
    const created = await About.create(defaultAbout);
    about = created.toObject();
  }
  return about;
};
