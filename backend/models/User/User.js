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
    badges: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Badge",
      },
    ],
    earnings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Earning",
      },
    ],
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    subPayments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubPayment",
      },
    ],
    investments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Investment",
      },
    ],
    purchases: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Purchase",
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
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    totalReviewPoints: {
      type: Number,
      default: 0,
    },
    totalInvestmentPoints: {
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
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
    envelopss: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Envelope",
      },
    ],
    contributerKey: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
