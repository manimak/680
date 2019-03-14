const { GraphQLServer } = require('graphql-yoga')
const mongoose = require("mongoose")

mongoose.connect("https://stormy-fortress-69906.herokuapp.com/");

const User = mongoose.model('User',{
  firstName: String,
  lastName: String,
});

const TravelInfo = mongoose.model('TravelInfo',{
    from: String,
    to: String,
    depart: String,
    ureturn: String,
    how: String,
    foods: [String]
});

const typeDefs = `
  type Query {
    hello(name: String): String!
    users: [User]
    travelInfos : [TravelInfo]
  }
  type User{
    id: ID!
    firstName: String!
    lastName: String!
  }
  type TravelInfo{
    id: ID!
    from: String!
    to: String!
    depart: String!
    ureturn: String!
    how: String!
    foods: [String]
  }
  type Mutation {
      createUser(firstName: String!,lastName: String!): User
      updateUser(id: ID!, firstName: String! , lastName : String!) : Boolean
      removeUser(id: ID!) : Boolean
      createTravelInfo(from: String!,to: String!,depart: String!,ureturn: String!,how: String!,foods: [String]): TravelInfo
      updateTravelInfo(id: ID!,from: String!,to: String!,depart: String!,ureturn: String!,how: String!,foods: [String]) : Boolean
      removeTravelInfo(id: ID!) : Boolean
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    users: () => User.find(),
    travelInfos: () => TravelInfo.find()
  },
  Mutation: {
    createUser: async (_, { firstName,lastName}) => {
        const user = new User({ firstName,lastName});
        await user.save();
        return user;
    },
    createTravelInfo: async (_, {from,to,depart,ureturn,how,foods}) => {
      const travelInfo = new TravelInfo({from,to,depart,ureturn,how,foods});
      await travelInfo.save();
      return travelInfo;
   },
    updateUser: async (_,{id,firstName,lastName}) => {
      await User.findByIdAndUpdate(id,{firstName,lastName});
      return true;
    },
    updateTravelInfo: async (_, {id,from,to,depart,ureturn,how,foods}) => {
      await TravelInfo.findByIdAndUpdate(id,{from,to,depart,ureturn,how,foods});
      return true;
   },
    removeUser: async (_,{id}) => {
      await User.findByIdAndDelete(id);
      return true;
    },
    removeTravelInfo: async (_,{id}) => {
      await TravelInfo.findByIdAndDelete(id);
      return true;
    }
    

  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
mongoose.connection.once('open',function(){
  server.start(() => console.log('Server is running on localhost:4000'))
});
