const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxLength: 32,
      unique: true,
    },
    // when a new entry is added to this schema/collection, timestamp will be added
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
