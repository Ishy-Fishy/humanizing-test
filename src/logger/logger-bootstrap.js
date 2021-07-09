"use strict";
const PROTO_PATH = __dirname + "/../protos/logger.proto";
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

function bootstrapLogger() {
  const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });
  const packageDef = grpc.loadPackageDefinition(packageDefinition);
  return packageDef.Logger;
}

module.exports = {
  bootstrapLogger,
};
