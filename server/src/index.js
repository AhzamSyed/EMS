import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'; 
import connectDB from './config/db.js';
import employeeRoutes from './routes/employee.routes.js';

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/employees", employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get("/", (req, res) => {
  res.send("EMS API is running 🚀");
});
