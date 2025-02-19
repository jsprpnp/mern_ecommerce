import express from 'express';
import dotenv from 'dotenv';
import { connnectDB } from './config/db.js';
import productRoutes from '../routes/product.route.js';

dotenv.config();

const app = express();

app.use(express.json());//  middleware: allows us to accept json data

//ROUTES
app.use('/api/products',productRoutes);

app.listen (process.env.PORT, () => {
    connnectDB();

  console.log('Server is running on http://localhost:', process.env.PORT);
});

