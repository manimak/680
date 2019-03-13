const { GraphQLServer } = require('graphql-yoga')
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/test5");

const User = mongoose.model('User',{
  firstName: String,
  lastName: String,
});

const typeDefs = `
  type Query {
    hello(name: String): String!
    users: [User]
  }
  type User{
    id: ID!
    firstName: String!
    lastName: String!
  }
  type Mutation {
      createUser(firstName: String!,lastName: String!): User
      updateUser(id: ID!, firstName: String! , lastName : String!) : Boolean
      removeUser(id: ID!) : Boolean
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    users: () => User.find()
  },
  Mutation: {
    createUser: async (_, { firstName,lastName}) => {
        const user = new User({ firstName,lastName});
        await user.save();
        return user;
    },
    updateUser: async (_,{id,firstName,lastName}) => {
      await User.findByIdAndUpdate(id,{firstName,lastName});
      return true;
    },
    removeUser: async (_,{id}) => {
      await User.findByIdAndDelete(id);
      return true;
    }
    

  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
mongoose.connection.once('open',function(){
  server.start(() => console.log('Server is running on localhost:4000'))
});
