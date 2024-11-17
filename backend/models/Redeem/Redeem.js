const mongoose = require("mongoose");

const redeemSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    redeemPoints: {
      type: Number,
      default: 0,
    },
    redeemname: {
      type: String,
    },
    redeemDescription: {
      type: String,
    },
    images: {
      type: [Object],
    },
    isAvailable: {
      type: Boolean,
      default: false,
    },
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Redeem", redeemSchema);
