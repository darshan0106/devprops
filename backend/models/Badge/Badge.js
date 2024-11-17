const mongoose = require("mongoose");

const badgeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    image: {
      type: Object,
    },
    batchName: {
      type: String,
      enum: ["contributerBatch", "yearlyBatch", "monthlyBatch"],
      default: null,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Badge", badgeSchema);
