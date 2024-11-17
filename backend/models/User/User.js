const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: Object,
      default: null,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
      required: false,
    },
    authMethod: {
      type: String,
      enum: ["google", "local"],
      required: true,
      default: "local",
    },
    role: {
      type: String,
      enum: ["developer", "general", "contributer", "investor"],
      default: "general",
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    badge: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Badge",
      },
    ],
    totalEarning: {
      type: Number,
      default: 0,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    payments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
      },
    ],
    investments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Investment",
      },
    ],
    lastlogin: {
      type: Date,
      default: Date.now(),
    },
    profession: {
      type: String,
      enum: ["student", "developer"],
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    ranking: {
      type: Number,
      default: 0,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    links: {
      type: Object,
      default: null,
    },
    reviewPoints: {
      type: Number,
      default: 0,
    },
    investmentPoints: {
      type: Number,
      default: 0,
    },
    pointActivity: {
      type: [Number],
    },
    Plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
    },
    hasSelectedPlan: {
      type: Boolean,
      default: false,
    },
    itemsPurchased: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Redeem"
      }
    ],
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
