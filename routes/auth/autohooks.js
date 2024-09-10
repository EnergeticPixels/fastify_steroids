import fp from "fastify-plugin";
import schemas from "./schemas/loader.js";

export default fp(
  async function userAutoHooks(fastify, opts) {
    const dbConnect = fastify.mongo.db;
    if (!dbConnect) {
      throw new Error("MongoDB connection is not established");
    }
    const users = dbConnect.collection("users");

    fastify.register(schemas);

    fastify.decorate("usersDataSource", {
      async readUser(username) {
        const user = await users.findOne({ username });
        return user;
      },
      async createUser(user) {
        const newUser = await users.insertOne(user);
        return newUser.insertedId;
      },
    });
  },
  {
    encapsulate: true,
    dependencies: ["@fastify/mongodb"],
    name: "user-store",
  },
);
