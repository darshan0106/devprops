const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    image: {
      type: Object,
      default: null,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    location: {
      type: String,
      required: true,
    },
    socioEvents: {
      type: [String]
    },
    status: {
      type: String,
      enum: ["notStarted", "live", "ended"],
      default: "notStarted",
    },
    date: {
      type: Date,
      required: true,
    },
    investments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Investment"
      }
    ],
    fundraised: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
