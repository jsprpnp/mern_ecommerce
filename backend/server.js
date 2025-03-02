import express from 'express';
import dotenv from 'dotenv';
import { connnectDB } from './config/db.js';
import productRoutes from '../routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());//  middleware: allows us to accept json data

//ROUTES
app.use('/api/products',productRoutes);

app.listen (PORT, () => {
    connnectDB();

  console.log(`Server is running on http://localhost:${PORT}`);
});

