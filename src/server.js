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
import adminRouter from './routes/adminRouter.js'
import storeRouter from './routes/bussinessRouter.js'
import bookingRouter from './routes/bookingRouter.js'


import morgan from "morgan";

const app = express();
app.set("port", process.env.PORT || 4200);

app.use(cors())

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send(" Server is ready")
})

app.use('/api/v1/admins', adminRouter)
app.use('/api/v1/stores', storeRouter)
app.use('/api/v1/bookings', bookingRouter)


app.listen(app.get("port"), () => {
    console.log('server is ready')
})


  // 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
