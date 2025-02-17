import mongoose from "mongoose";
import express from 'express';
import userRoute from './routes/userRoute.js'; 
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 9000;
const URI = process.env.MONGODB_URI;

// Mongoose connection
mongoose.connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Route Definitions (this should be outside of the try-catch block)
app.use('/auth', userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
