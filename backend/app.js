import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Db/ConnectDB.js';
import authRoutes from './Routes/Auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allow JSON parsing incoming requests

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on port', PORT);
});


// 19117abd5f437822ba47bd9f4f658e88