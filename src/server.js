"use strict";
const { bootstrapLogger } = require("./logger/logger-bootstrap");
const grpc = require("@grpc/grpc-js");
const { logMessage: logMessageFn } = require("./logger/logger-fn");
const {
  default: wrapServerWithReflection,
} = require("grpc-node-server-reflection");

console.log("wrapServerWithReflection~~~~~~~~~\n", wrapServerWithReflection);

function getServer() {
  const server = wrapServerWithReflection(new grpc.Server());
  // const server = new grpc.Server();

  const logger = bootstrapLogger();

  server.addService(logger.service, {
    logMessage(call, cb) {
      console.log("call rq", call.request);
      logMessageFn(call.request)
        .then(() => {
          cb(null, { ok: true });
        })
        .catch((e) => cb(e, { ok: false }));
    },
  });

  return server;
}

module.exports = {
  getServer,
};
