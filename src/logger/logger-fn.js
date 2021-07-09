"use strict";
const { Log } = require("./log-schema");

async function logMessage({ timestamp, category, origin, message }) {
  const log = new Log({
    timestamp,
    category,
    origin,
    message,
  });
  await log.save();
  //as defined in logger.proto
  return { ok: true };
}

module.exports = {
  logMessage,
};
