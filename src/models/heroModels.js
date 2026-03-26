import mongoose from "mongoose";

const heroSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, required: true, trim: true },
    heroImg: { type: String, required: true, trim: true },
    buttons: [
      {
        name: { type: String, required: true, trim: true },
        link: { type: String, required: true, trim: true },
      },
    ],
  },
  { timestamps: true },
);

const Hero = mongoose.models.Hero || mongoose.model("Hero", heroSchema);

const defaultHero = {
  name: "Manish Katari",
  title: "Full Stack Developer | QA Automation",
  subtitle: "Passionate about building modern web applications.",
  heroImg: "../public/images/Manish1.png",
  buttons: [
    { name: "Hire Me", link: "/about/#contact" },
    { name: "View Resume", link: "../public/" },
  ],
};

export const feachHeroDate = async () => {
  let hero = await Hero.findOne().lean();
  if (!hero) {
    const created = await Hero.create(defaultHero);
    hero = created.toObject();
  }
  return hero;
};
