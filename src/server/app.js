import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors"
import adminRouter from '../routes/adminRouter.js'
import storeRouter from '../routes/bussinessRouter.js'
import bookingRouter from '../routes/bookingRouter.js'
import buyRouter from '../routes/buyRouter.js'
import menuRouter from '../routes/menuRouter.js'

const app = express();

// Setting
app.set("port", 4200);

// middlewares
app.use(express.json({limit: "30mb", extended:true}));
app.use(express.urlencoded({ limit: "30mb", extended: false }));
app.use(cors())
app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.send({Server: " Server is ready"})
})

app.use('/api/v1/admins', adminRouter)
app.use('/api/v1/buy', buyRouter)
app.use('/api/v1/menu', menuRouter)
app.use('/api/v1/stores', storeRouter)
app.use('/api/v1/bookings', bookingRouter)

export default app;


  // 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