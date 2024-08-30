const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema(
  {
    about: {
      type: Object,
      required: false,
      default: {},
    },
    files: {
      type: Object,
      required: false,
      default: {},
    },
    social: {
      type: Object,
      required: false,
      default: {},
    },
    skills: {
      type: Array,
      required: false,
      default: [],
    },
    projects: {
      type: Array,
      required: false,
      default: [],
    },
    statistics: {
      type: Object,
      required: false,
      default: {},
    },
    testimonials: {
      type: Array,
      required: false,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const infoModel = mongoose.models.Info || mongoose.model("Info", infoSchema);
module.exports = infoModel;
