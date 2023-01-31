import mongoose from "mongoose";

const AdvertSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 2,
      max: 20,
    },
    description: {
      type: String,
      required: true,
      min: 2,
      max: 250,
    },
    website: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    picturePath: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Advert = mongoose.models.Advert || mongoose.model("Advert", AdvertSchema);
export default Advert;
