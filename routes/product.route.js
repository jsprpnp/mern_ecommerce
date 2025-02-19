import express from 'express';
import mongoose from 'mongoose';
import Product from '../backend/models/product.model.js';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../backend/controllers/product.controller.js';

const router = express.Router();


  //FETCH PRODUCT
  router.get("/", getProducts);
  
  //CREATE PRODUCT
  router.post("/", createProduct);
  
  //UPDATE PRODUCT
  router.put("/:id", updateProduct);
  
  //DELETE PRODUCT
  router.delete("/:id", deleteProduct);
    

export default router;