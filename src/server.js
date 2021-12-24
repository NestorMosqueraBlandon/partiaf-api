// import apollo  from "apollo-server";
// const { ApolloServer } = apollo;
// import './database/database.js';

// import dotenv from 'dotenv'

// dotenv.config();


// // GRAPHQL
// import typeDefs from './graphql/typeDefs.js';
// import resolvers from './graphql/resolvers/index.js';

// import config from './utils/config.js';


// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: ({req}) => ({req})
// });

// const port = config.PORT;

// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`)
// })

import express from "express";
import "./database/database.js"
import cors from "cors"
const app = express();
app.set('port', 5200);

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.listen(app.get("port"), () => {
    console.log('server is ready')
})
