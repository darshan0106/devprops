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
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    coments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    location: {
      type: String,
      required: true,
    },
    activities: {
      type: [String],
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
        ref: "EventInvestment",
      },
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
