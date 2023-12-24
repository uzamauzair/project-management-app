import express, { Express } from 'express'
import dotenv from "dotenv";
import { graphqlHTTP } from 'express-graphql'
import schema from './schema/schema';
import connectDB from './config/db';

const app: Express = express();
dotenv.config({ path: 'server/.env' });

const port = process.env.PORT || 5000;

//Connect to Database
connectDB();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});