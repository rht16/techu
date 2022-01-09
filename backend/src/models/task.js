const mongoose = require("mongoose");

let Task = new mongoose.Schema(
  {
    id: {
      type: Number,
      default: 1,
    },
    task: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("task", Task);