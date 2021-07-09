"use strict";
const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema(
  {
    timestamp: { type: Date, default: new Date(), index: true },
    category: { type: String },
    origin: { type: String },
    message: { type: String },
  },
  { timestamps: false }
);

const Log = mongoose.model("Log", LogSchema);

module.exports = { Log };
