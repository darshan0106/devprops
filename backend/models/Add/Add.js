const mongoose = require("mongoose");

const addPostSchema = new mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    images: {
      type: [Object],
    },
    videos: {
      type: [Object],
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AddPost", addPostSchema);
