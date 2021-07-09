const dotenv = require("dotenv");
const grpc = require("@grpc/grpc-js");
const { connectDb } = require("./src/db");
const { getServer } = require("./src/server");

async function main() {
  //load .env into process.env
  dotenv.config();

  //init mongo connection for mongoose
  await connectDb();

  const routeServer = getServer();

  routeServer.bindAsync(
    `0.0.0.0:${process.env.GRPC_PORT}`,
    grpc.ServerCredentials.createInsecure(),
    () => {
      routeServer.start();
    }
  );
}

main()
  .then(() =>
    console.log(
      `startup successful, server running at port: ${process.env.GRPC_PORT}`
    )
  )
  .catch((e) => console.error("startup error:\n", e));
