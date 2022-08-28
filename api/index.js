import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import { authRoute, cityRoute, contactUsRoute, countyRoute, propertyRoute, propertySaleTypeRoute, propertyTypeRoute, roomNumberRoute, userRoute } from './src/routes/index.js';

const app = express();
dotenv.config();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected");
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/properties", propertyRoute);
app.use("/api/cities", cityRoute);
app.use("/api/counties", countyRoute);
app.use("/api/propertysaletypes", propertySaleTypeRoute);
app.use("/api/propertytypes", propertyTypeRoute);
app.use("/api/roomnumbers", roomNumberRoute);
app.use("/api/contactuss", contactUsRoute);

app.use((err, req, res, next) => {

    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(port, hostname, () => {
    connect();
    console.log(`Server running at http://${hostname}:${port}`);
});