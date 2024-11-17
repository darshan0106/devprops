const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    message: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
