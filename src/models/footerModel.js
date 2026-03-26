import mongoose from "mongoose";

const footerLinkSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    path: { type: String, required: true, trim: true },
  },
  { _id: false },
);

const footerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    copyright: { type: String, required: true, trim: true },
    links: [footerLinkSchema],
  },
  { timestamps: true },
);

const Footer = mongoose.models.Footer || mongoose.model("Footer", footerSchema);

const defaultFooter = {
  name: "Manish",
  description:
    "Full Stack Developer | QA Automation Engineer | React & Node Developer. Passionate about building modern web applications.",
  copyright: "© 2026 Manish Portfolio | All Rights Reserved",
  links: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/projects" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/about" },
  ],
};

export const fetchFooterData = async () => {
  let footer = await Footer.findOne().lean();
  if (!footer) {
    const created = await Footer.create(defaultFooter);
    footer = created.toObject();
  }
  return footer;
};
