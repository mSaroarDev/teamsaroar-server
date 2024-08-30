const infoModel = require("../models/info");
const connectDB = require("../db/connectDB");

// update about
const getInfo = async (req, res) => {
  try {
    await connectDB();
    const data = await infoModel.find();
    res.status(200).json({ msg: "success", data });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: "internal server error" });
  }
};

// update about
const updateAbout = async (req, res) => {
  const body = req.body;
  const {
    bio,
    headline,
    description,
    fullName,
    location,
    email,
    office,
    // cv,
    // facebook,
    // linkedin,
    // youtube,
    // github,
    // happyClients,
    // experiences,
    // hoursWorked,
    // awardsWon,
  } = body;

  const formattedData = {
    about: {
      bio,
      headline,
      description,
      fullName,
      location,
      email,
      office,
    },
    // files: {
    //   cv,
    // },
    // social: {
    //   facebook,
    //   linkedin,
    //   youtube,
    //   github,
    // },
    // skills: [],
    // statistics: {
    //   happyClients,
    //   experiences,
    //   hoursWorked,
    //   awardsWon,
    // },
    // testimonials: [],
  };

  try {
    await connectDB();

    const existingData = await infoModel.find();

    const updatedData = await infoModel.findByIdAndUpdate(
      { _id: existingData[0]._id },
      {
        $set: {
          about: {
            bio,
            headline,
            description,
            fullName,
            location,
            email,
            office,
          },
        },
      },
      {
        new: true,
      }
    );

    res.status(200).json({ msg: "success", data: updatedData });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: "internal server error" });
  }
};

// update cv
const updateFiles = async (req, res) => {
  const body = req.body;
  const { cv } = body;

  try {
    await connectDB();

    const existingData = await infoModel.find();

    const updatedData = await infoModel.findByIdAndUpdate(
      { _id: existingData[0]._id },
      {
        $set: {
          files: {
            cv,
          },
        },
      },
      {
        new: true,
      }
    );

    res.status(200).json({ msg: "success", data: updatedData });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: "internal server error" });
  }
};

// update social
const updateSocial = async (req, res) => {
  const body = req.body;
  const { facebook, linkedin, youtube, github } = body;

  try {
    await connectDB();

    const existingData = await infoModel.find();

    const updatedData = await infoModel.findByIdAndUpdate(
      { _id: existingData[0]._id },
      {
        $set: {
          social: {
            facebook,
            linkedin,
            youtube,
            github,
          },
        },
      },
      {
        new: true,
      }
    );

    res.status(200).json({ msg: "success", data: updatedData });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: "internal server error" });
  }
};

// update about
const updateStatistics = async (req, res) => {
  const body = req.body;

  const { happyClients, experiences, hoursWorked, projects } = body;

  try {
    await connectDB();

    const existingData = await infoModel.find();

    const updatedData = await infoModel.findByIdAndUpdate(
      { _id: existingData[0]._id },
      {
        $set: {
          statistics: {
            happyClients,
            experiences,
            hoursWorked,
            projects,
          },
        },
      },
      {
        new: true,
      }
    );

    res.status(200).json({ msg: "success", data: updatedData });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: "internal server error" });
  }
};

// update testimonials
const updateTestimonials = async (req, res) => {
  const body = req.body;

  const { testimonials } = body;
  console.log("testimonials", testimonials);

  try {
    await connectDB();

    const existingData = await infoModel.find();

    const updatedData = await infoModel.findByIdAndUpdate(
      { _id: existingData[0]._id },
      {
        $set: {
          testimonials,
        },
      },
      {
        new: true,
      }
    );

    res.status(200).json({ msg: "success", data: updatedData });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: "internal server error" });
  }
};

// update testimonials
const updateSkills = async (req, res) => {
  const body = req.body;

  const { skills } = body;

  try {
    await connectDB();

    const existingData = await infoModel.find();

    const updatedData = await infoModel.findByIdAndUpdate(
      { _id: existingData[0]._id },
      {
        $set: {
          skills,
        },
      },
      {
        new: true,
      }
    );

    res.status(200).json({ msg: "success", data: updatedData });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: "internal server error" });
  }
};

// update Projects
const updateProjects = async (req, res) => {
  const body = req.body;

  const { projects } = body;

  try {
    await connectDB();

    const existingData = await infoModel.find();

    const updatedData = await infoModel.findByIdAndUpdate(
      { _id: existingData[0]._id },
      {
        $set: {
          projects,
        },
      },
      {
        new: true,
      }
    );

    res.status(200).json({ msg: "success", data: updatedData });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: "internal server error" });
  }
};

module.exports = {
  getInfo,
  updateAbout,
  updateFiles,
  updateSocial,
  updateStatistics,
  updateTestimonials,
  updateSkills,
  updateProjects,
};
