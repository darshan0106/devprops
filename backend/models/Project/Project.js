const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    projectname: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["notStarted", "inProgress", "completed"],
      default: "notStarted",
      required: true,
    },
    devlepors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
    ],
    discordLink: {
      type: String,
      required: true,
    },
    controller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
      default: null,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    stack: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
