const { usersData } = require("../../data/userData");
const { movieData } = require("../../data/movieData");

const userQueryResolver = {
  //This is the resolver of all the Query's related to the user

  Query: {
    users: () => usersData, // type-defs expect an array of objects

    user: (parent, args) => {
      // type-defs expect single object

      const { id } = args; // here we need to destructure according to the key mentioned in the type-defs
      return usersData.filter((user) => user.id === parseInt(id))[0]; // [0] is for getting first object
    },
  },

  User: {
    favMovie: (parent, args) => {
      /**
       * In the usersData we dont have any movie list
       * but still we can add the data as follows
       * it will require the category of user's favourite moives
       */
      const { category } = args;
      const data = movieData.filter(
        (movie) => movie.category === category && movie.released === true
      );
      return data;
    },
  },
};

const userMutationResolver = {
  Mutation: {
    addUser: (parent, args) => {
      const { name, username, age } = args.input;
      const id = usersData.slice(-1)[0].id + 1;
      const user = { id, name, username, age };
      usersData.push(user);
      return user;
    },
    updateUser: (parent, args) => {
      const { id, username } = args.input;
      const index = usersData.findIndex((user) => user.id === parseInt(id));
      usersData[index].username = username;
      return usersData[index];
    },
    deleteUser: (parent, args) => {
      const { id } = args;
      usersData.forEach((user, index) => {
        if (user.id === parseInt(id)) {
          usersData.splice(index, 1);
        }
      });
    },
  },
};

module.exports = { userQueryResolver, userMutationResolver };
