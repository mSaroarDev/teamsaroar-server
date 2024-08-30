const infoModel = require("../models/info");
const connectDB = require("../db/connectDB");

// user register
const createBoilerPlate = async (req, res, next) => {
  const body = req.body;
  const {
    bio,
    headline,
    description,
    fullName,
    location,
    email,
    office,
    cv,
    facebook,
    linkedin,
    youtube,
    github,
    happyClients,
    experiences,
    hoursWorked,
    awardsWon,
  } = body;

  try {
    await connectDB();

    const existingData = await infoModel.find();
    if (existingData.length < 1) {
      const newData = new infoModel({
        about: {
          bio,
          headline,
          description,
          fullName,
          location,
          email,
          office,
        },
        files: {
          cv,
        },
        social: {
          facebook,
          linkedin,
          youtube,
          github,
        },
        skills: [],
        statistics: {
          happyClients,
          experiences,
          hoursWorked,
          awardsWon,
        },
        testimonials: [],
      });

      await newData.save();
    }

    next();
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: "internal server error" });
  }
};

module.exports = createBoilerPlate;
