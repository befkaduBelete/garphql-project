import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import dotenv from "dotenv";
import rootSchema from "./server/schema.js";

dotenv.config();
const app = express();

const myshema = buildSchema(`
    type User {
    name:String
    age:String 
    }
     type Query {
        hello :  String ,
        user: User
        
     }

       
    
    `);
const root = {
  hello: () => {
    return "Hello QYASS";
  },
  user: () => ({
    name: "Befkadu",
    age: "34",
  }),
};
const PORT = process.env.PORT || 9000;
app.use(
  "/graphiql",
  graphqlHTTP({
    schema: rootSchema,
    graphiql: true,
  }),
);
app.listen(PORT, () => {
  console.log(`This is server which run at Port ${PORT}`);
});
