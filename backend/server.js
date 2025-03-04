import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import { connnectDB } from './config/db.js';

import productRoutes from '../routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(express.json());//  middleware: allows us to accept json data

//ROUTES
app.use('/api/products',productRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen (PORT, () => {
    connnectDB();

  console.log(`Server is running on http://localhost:${PORT}`);
});

