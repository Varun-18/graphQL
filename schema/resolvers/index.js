const { userQueryResolver } = require("./user.resolvers");
const {userMutationResolver} = require("./user.resolvers")

const resolvers = { ...userQueryResolver, ...userMutationResolver };

module.exports = { resolvers };
