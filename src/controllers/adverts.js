import Advert from "../models/Advert.js";

export const getAdvert = async (req, res) => {
  try {
    const count = await Advert.countDocuments();
    const random = Math.floor(Math.random() * count);
    const ad = await Advert.findOne().skip(random);
    res.status(200).json(ad);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
