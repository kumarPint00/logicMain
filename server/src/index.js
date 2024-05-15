import cors from 'cors';
import connectDB from "./db/index.js";
import {app} from './app.js'
import * as dotenv from 'dotenv';
dotenv.config();

// Enable CORS for all origins
app.use(cors({origin: '*'}));

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed!!! ", err);
})
