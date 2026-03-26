import mongoose from "mongoose";

const projectSkillSchema = new mongoose.Schema(
  {
    SkillName: { type: String, required: true, trim: true },
    value: { type: Number, required: true, min: 0, max: 100 },
  },
  { _id: false },
);

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    tools: [{ type: String, trim: true }],
    githubUrl: { type: String, trim: true },
    liveUrl: { type: String, trim: true },
    skills: [projectSkillSchema],
    year: { type: String, required: true, trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

const defaultProjects = [
  {
    title: "Portfolio Website",
    description: "React + Node.js Portfolio",
    tools: ["React", "Node", "Express"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
    skills: [
      { SkillName: "React", value: 80 },
      { SkillName: "Node / Express", value: 70 },
    ],
    year: "2025",
    order: 1,
  },
  {
    title: "Portfolio Website",
    description: "React + Node.js Portfolio",
    tools: ["React", "Node", "Express"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
    skills: [
      { SkillName: "React", value: 80 },
      { SkillName: "Node / Express", value: 70 },
    ],
    year: "2025",
    order: 2,
  },
];

export const feachProjectsData = async () => {
  let projects = await Project.find().sort({ order: 1, _id: 1 }).lean();
  if (!projects.length) {
    await Project.insertMany(defaultProjects);
    projects = await Project.find().sort({ order: 1, _id: 1 }).lean();
  }
  return projects.map((project) => ({
    id: project._id,
    title: project.title,
    description: project.description,
    tools: project.tools,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    skills: project.skills,
    year: project.year,
  }));
};
