const mongoose = require("mongoose");

const eventPostSchema = new mongoose.Schema(
  {
    images: {
      type: [Object],
    },
    videos: {
      type: [Object],
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
    },
    thanks: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EventPost", eventPostSchema);
