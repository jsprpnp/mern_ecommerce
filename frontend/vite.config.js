import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:3000",
			},
		},
	},
});

/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        //target: `http://localhost:3000`,
      }
    }
  }
}) */
