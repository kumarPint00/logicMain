import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgan from 'morgan'
import bodyParser from 'body-parser'
import log4js from 'log4js'
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend origin
}));

function normalizePort(val) {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  }

const port = normalizePort(process.env.PORT || '4000');

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(morgan('dev'));

log4js.configure({
    appenders: { serviceprAdmin: { type: 'file', filename: 'servicepr-admin.log' } },
    categories: { default: { appenders: ['serviceprAdmin'], level: 'info' } },
  });
  
  const logger = log4js.getLogger('serviceprAdmin');
  
//routes import
import userRouter from './routes/user.routes.js'
import carRouter from "./routes/car.routes.js"
import enquiryRouter from './routes/enquiry.routes.js'
import addressRouter from './routes/address.routes.js'
import bookingRouter from './routes/booking.routes.js'
import branchRouter from './routes/branch.routes.js'
import documentRouter from './routes/document.routes.js'
import languageRouter from './routes/language.routes.js'
import promocodeRouter from './routes/promocode.routes.js'
import walletRouter from './routes/wallet.routes.js'
import superAdminRouter from './routes/superAdmin.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)
app.use('/api/v1/admin', carRouter)
app.use('/api/v1/user', enquiryRouter)
app.use('/api/v1/user', addressRouter)
app.use('/api/v1/user', bookingRouter)
app.use('/api/v1/user', branchRouter)
app.use('/api/v1/user', documentRouter)
app.use('/api/v1/user', languageRouter)
app.use('/api/v1/user', promocodeRouter)
app.use('/api/v1/user', walletRouter)
app.use('/api/v1/user', superAdminRouter)


// http://localhost:8000/api/v1/users/register

export { app }