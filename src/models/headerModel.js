import mongoose from "mongoose";

const navLinkSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    path: { type: String, required: true, trim: true },
  },
  { _id: false },
);

const headerSchema = new mongoose.Schema(
  {
    logo: { type: String, required: true, trim: true },
    navLinks: [navLinkSchema],
  },
  { timestamps: true },
);

const Header = mongoose.models.Header || mongoose.model("Header", headerSchema);

const defaultHeader = {
  logo: "Manish",
  navLinks: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ],
};

export const feachHeaderData = async () => {
  let header = await Header.findOne().lean();
  if (!header) {
    const created = await Header.create(defaultHeader);
    header = created.toObject();
  }
  return header;
};
