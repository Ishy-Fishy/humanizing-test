"use strict";
const mongoose = require("mongoose");

async function connectDb() {
  console.log("DB URL: ", process.env.DB_URL);
  await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    dbName: process.env.DB_NAME,
  });

  const db = mongoose.connection;

  db.on("error", (err) => {
    console.error("Mongo connection error.", err);
  });

  db.once("open", () => {
    console.info("Mongo connection OK.");
  });

  return db;
}

module.exports = {
  connectDb,
};
