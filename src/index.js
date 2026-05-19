require("dotenv").config();
require("dotenv").config();
const fastify = require("fastify")({ logger: true });

fastify.get("/", (request, reply) => {
  reply.status(200).send("Hello world");
});

fastify.listen({ port: process.env.PORT, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.log(err);
    throw err;
  }

  console.log(`Server running on address: ${address}`);
});
