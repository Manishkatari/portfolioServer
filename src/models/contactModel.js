import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true },
    submittedAt: { type: Date, required: true },
  },
  { timestamps: true },
);

const ContactMessage =
  mongoose.models.ContactMessage ||
  mongoose.model("ContactMessage", contactMessageSchema);

export const fetchContactData = async () => {
  const data = await ContactMessage.find().sort({ createdAt: -1 }).lean();
  const count = data.length;

  return {
    success: true,
    message: "Contact data retrieved",
    count,
    data,
  };
};

export const fetchContactById = async (id) => {
  const contact = await ContactMessage.findById(id).lean();
  if (!contact) {
    return null;
  }

  return {
    success: true,
    data: contact,
  };
};

export const saveContactMessage = async ({
  name,
  email,
  message,
  submittedAt,
}) => {
  const doc = await ContactMessage.create({
    name,
    email,
    message,
    submittedAt: submittedAt ? new Date(submittedAt) : new Date(),
  });

  return {
    success: true,
    message: "Message received successfully",
    data: { doc},
  };
};
