const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { typeDefs } = require("./schema/typeDefs/index");
const { resolvers } = require("./schema/resolvers/index");

const server = new ApolloServer({ typeDefs, resolvers });

const StartServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 5000 },
  });
  console.log(`🚀  Server ready at ${url}`);
};

StartServer();
