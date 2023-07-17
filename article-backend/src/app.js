import express from "express";
import userRoute from "./routes/user.route.js";
import connectDB from "./config/connectdb.js";
import dotenv from "dotenv"
import cors from 'cors'

dotenv.config()

const app = express();
const port = process.env.PORT;
const Database_Url = process.env.DATABASE_URL;

//Cors Policy
app.use(cors())

// Connect Database
connectDB(Database_Url)

//JSON
app.use(express.json());

//Routes
app.use("/api/user", userRoute);

app.listen(8000, () => console.log(`server is listening at http://localhost:${port}`));
